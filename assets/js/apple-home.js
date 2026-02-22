(function () {
  function normalizePath(path) {
    if (!path) return '/';
    var normalized = path.replace(/\/+$/, '');
    return normalized === '' ? '/' : normalized;
  }

  function initReveal() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!nodes.length) return;

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      nodes.forEach(function (node) {
        node.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    nodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  function initActiveNav() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.hp-nav__link'));
    if (!links.length) return;

    var currentPath = normalizePath(window.location.pathname);
    var sectionItems = [];
    var pathMatches = [];

    function toLinkKey(urlObject) {
      var path = normalizePath(urlObject.pathname);
      var hash = urlObject.hash ? decodeURIComponent(urlObject.hash) : '';
      return path + hash;
    }

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      var parsed;
      try {
        parsed = new URL(href, window.location.origin);
      } catch (error) {
        return;
      }

      var linkPath = normalizePath(parsed.pathname);
      if (linkPath !== currentPath) return;

      var hash = parsed.hash ? decodeURIComponent(parsed.hash.slice(1)) : '';
      if (!hash) {
        pathMatches.push(toLinkKey(parsed));
        return;
      }

      var section = document.getElementById(hash);
      if (!section) return;

      sectionItems.push({
        id: hash,
        key: toLinkKey(parsed),
        section: section,
      });
    });

    function setActiveLink(targetKey) {
      links.forEach(function (link) {
        var href = link.getAttribute('href');
        if (!href) return;
        try {
          var parsed = new URL(href, window.location.origin);
          link.classList.toggle('is-active', toLinkKey(parsed) === targetKey);
        } catch (error) {
          link.classList.remove('is-active');
        }
      });
    }

    if (pathMatches.length) {
      setActiveLink(pathMatches[0]);
    }

    if (!sectionItems.length || !('IntersectionObserver' in window)) {
      return;
    }

    var idToLinkKey = new Map();
    var idToSection = new Map();
    sectionItems.forEach(function (item) {
      idToLinkKey.set(item.id, item.key);
      idToSection.set(item.id, item.section);
    });

    var visible = new Set();

    function resolveActiveSection() {
      var bestId = '';
      var bestDistance = Number.POSITIVE_INFINITY;

      visible.forEach(function (id) {
        var section = idToSection.get(id);
        if (!section) return;
        var distance = Math.abs(section.getBoundingClientRect().top - 120);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = id;
        }
      });

      if (!bestId) {
        var candidates = Array.from(idToSection.keys());
        for (var i = candidates.length - 1; i >= 0; i -= 1) {
          var current = idToSection.get(candidates[i]);
          if (current && current.getBoundingClientRect().top <= 120) {
            bestId = candidates[i];
            break;
          }
        }
      }

      if (!bestId) {
        var first = idToSection.keys().next();
        if (!first.done) bestId = first.value;
      }

      if (bestId && idToLinkKey.has(bestId)) {
        setActiveLink(idToLinkKey.get(bestId));
      }
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var id = entry.target.id;
          if (!id) return;

          if (entry.isIntersecting) {
            visible.add(id);
          } else {
            visible.delete(id);
          }
        });

        resolveActiveSection();
      },
      {
        root: null,
        rootMargin: '-32% 0px -52% 0px',
        threshold: [0, 0.2, 0.6, 1],
      }
    );

    sectionItems.forEach(function (item) {
      observer.observe(item.section);
    });

    window.addEventListener('resize', resolveActiveSection);
    window.addEventListener('scroll', resolveActiveSection, { passive: true });
    resolveActiveSection();
  }

  function init() {
    initReveal();
    initActiveNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
