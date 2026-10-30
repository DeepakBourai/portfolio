/**
 * PORTFOLIO APPLICATION LOGIC
 * High-performance, reactive UI engine for the editorial portfolio.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Verify data is loaded
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.error('PORTFOLIO_DATA not found. Ensure data/portfolio-data.js is loaded.');
    return;
  }

  const { profile, toolkit, workshop, projects, moreProjects, experience, education, certifications, principles } = PORTFOLIO_DATA;

  // Initialize UI components
  initIntroAnimation(profile);
  initNavClock();
  initProfile(profile);
  initToolkit(toolkit);
  initWorkshop(workshop);
  initProjects(projects, moreProjects);
  initExperience(experience, education, certifications);
  initPrinciples(principles);
  initContact(profile);
  initNavigation();
  initModals();
  init3DPhotoCard();
  initCursorEffects();
  initHeroMatrixCanvas();
  initMobileMenu();
});

/* -------------------------------------------------------------
 * 1. PROFILE & HERO SECTION
 * ------------------------------------------------------------- */
function initProfile(profile) {
  // Brand handles
  document.querySelectorAll('[data-bind="profile.name"]').forEach(el => el.textContent = profile.name);
  document.querySelectorAll('[data-bind="profile.handle"]').forEach(el => el.textContent = profile.handle);
  document.querySelectorAll('[data-bind="profile.role"]').forEach(el => el.textContent = profile.role);
  document.querySelectorAll('[data-bind="profile.kicker"]').forEach(el => el.textContent = profile.kicker);
  document.querySelectorAll('[data-bind="profile.subtitle"]').forEach(el => el.textContent = profile.heroSubtitle);
  document.querySelectorAll('[data-bind="profile.location"]').forEach(el => el.textContent = profile.location);

  // Availability badge
  const statusEl = document.getElementById('hero-status-pill');
  if (statusEl) {
    statusEl.innerHTML = `
      <span class="pulse-dot"></span>
      <span>${profile.status}</span>
    `;
  }

  // Hero Headline
  const headlineEl = document.getElementById('hero-headline');
  if (headlineEl && profile.heroHeadline) {
    headlineEl.innerHTML = `${profile.heroHeadline.pre} <em class="serif-italic text-lime">${profile.heroHeadline.highlight}</em> ${profile.heroHeadline.post}`;
  }

  // Profile Bio paragraphs
  const bioContainer = document.getElementById('profile-bio-container');
  if (bioContainer) {
    bioContainer.innerHTML = profile.bio.map(p => `
      <p class="text-base md:text-lg text-[#d5d2c8] leading-relaxed mb-6 font-normal">${p}</p>
    `).join('');
  }

  // Quick Facts Grid
  const factsContainer = document.getElementById('profile-facts-grid');
  if (factsContainer) {
    let html = '';
    if (profile.avatarUrl) {
      html += `
        <div class="p-4 rounded-xl bg-ink-2 border border-line flex items-center gap-4 mb-1">
          <img src="${profile.avatarUrl}" alt="${profile.name}" class="w-16 h-16 rounded-full object-cover border-2 border-lime/40 shadow-lg" onerror="this.style.display='none'" />
          <div>
            <div class="font-bold text-paper text-base">${profile.name}</div>
            <div class="text-xs text-lime font-mono">${profile.role}</div>
            <div class="text-xs text-dim mt-0.5">● ${profile.location}</div>
          </div>
        </div>
      `;
    }
    html += profile.facts.map(f => `
      <div class="p-4 rounded-xl bg-ink-2 border border-line">
        <span class="label-mono text-dim block mb-1">${f.label}</span>
        <span class="font-medium text-paper text-sm md:text-base">${f.value}</span>
      </div>
    `).join('');
    factsContainer.innerHTML = html;
  }

  // Numbers / Metrics Grid
  const numbersContainer = document.getElementById('profile-numbers-grid');
  if (numbersContainer) {
    numbersContainer.innerHTML = profile.numbers.map(n => `
      <div class="p-6 rounded-2xl bg-ink-2 border border-line hover:border-line-strong transition-all">
        <div class="text-3xl md:text-4xl font-bold font-mono text-lime mb-1 tracking-tight">${n.value}</div>
        <div class="text-sm font-semibold text-paper mb-1">${n.label}</div>
        <div class="text-xs text-dim font-mono">${n.note}</div>
      </div>
    `).join('');
  }
}

/* -------------------------------------------------------------
 * 2. FULL STACK TOOLKIT (Layer-by-layer Inspector)
 * ------------------------------------------------------------- */
function initToolkit(toolkit) {
  const layersContainer = document.getElementById('toolkit-layers-container');
  const inspectorName = document.getElementById('tool-inspector-name');
  const inspectorLayer = document.getElementById('tool-inspector-layer');
  const inspectorUse = document.getElementById('tool-inspector-use');
  const inspectorSeenIn = document.getElementById('tool-inspector-seenin');

  if (!layersContainer) return;

  function updateInspector(tool) {
    if (!tool) return;
    if (inspectorName) inspectorName.textContent = tool.name;
    if (inspectorLayer) inspectorLayer.textContent = tool.layer.toUpperCase();
    if (inspectorUse) inspectorUse.textContent = tool.use;
    if (inspectorSeenIn) {
      if (tool.seenIn && tool.seenIn.length > 0) {
        inspectorSeenIn.innerHTML = `
          <span class="label-mono text-dim block mb-2">Seen in production builds:</span>
          <div class="flex flex-wrap gap-2">
            ${tool.seenIn.map(p => `<span class="px-2.5 py-1 text-xs font-mono rounded bg-lime/10 text-lime border border-lime/20">${p}</span>`).join('')}
          </div>
        `;
      } else {
        inspectorSeenIn.innerHTML = '';
      }
    }
  }

  // Set default active tool
  if (toolkit.tools.length > 0) {
    updateInspector(toolkit.tools[0]);
  }

  // Render layers
  layersContainer.innerHTML = toolkit.layers.map(layer => {
    const layerTools = toolkit.tools.filter(t => t.layer === layer.id);
    return `
      <div class="p-6 md:p-8 rounded-2xl bg-ink-2 border border-line transition-all hover:border-line-strong">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-4 border-b border-line">
          <div class="flex items-center gap-3">
            <span class="font-mono text-xs px-2 py-0.5 rounded bg-lime/10 text-lime font-semibold border border-lime/20">${layer.index}</span>
            <h3 class="text-xl font-bold tracking-tight text-paper">${layer.title}</h3>
          </div>
          <p class="text-xs md:text-sm text-dim font-mono">${layer.caption}</p>
        </div>
        <div class="flex flex-wrap gap-2.5">
          ${layerTools.map((t, idx) => `
            <button type="button" class="tool-pill ${layer.index === 'L1' && idx === 0 ? 'active' : ''}" data-tool-name="${t.name}">
              ${t.name}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Handle pill click/hover
  layersContainer.querySelectorAll('.tool-pill').forEach(pill => {
    const name = pill.getAttribute('data-tool-name');
    const tool = toolkit.tools.find(t => t.name === name);

    const activate = () => {
      layersContainer.querySelectorAll('.tool-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      updateInspector(tool);
    };

    pill.addEventListener('click', activate);
    pill.addEventListener('mouseenter', activate);
  });
}

/* -------------------------------------------------------------
 * 3. DIGITAL WORKSHOP (Request Tracer Simulator)
 * ------------------------------------------------------------- */
function initWorkshop(workshop) {
  const journeysNav = document.getElementById('workshop-journeys-nav');
  const nodesContainer = document.getElementById('workshop-nodes-container');
  const stepsList = document.getElementById('workshop-steps-list');
  const activeHopTag = document.getElementById('active-hop-tag');
  const activeHopCode = document.getElementById('active-hop-code');
  const activeHopDetail = document.getElementById('active-hop-detail');
  const playBtn = document.getElementById('workshop-play-btn');
  const prevBtn = document.getElementById('workshop-prev-btn');
  const nextBtn = document.getElementById('workshop-next-btn');
  const journeyTitleEl = document.getElementById('workshop-journey-title');

  if (!journeysNav || !workshop.journeys || workshop.journeys.length === 0) return;

  let currentJourneyIndex = 0;
  let currentStepIndex = 0;
  let isPlaying = false;
  let timer = null;

  // Render static nodes
  if (nodesContainer) {
    nodesContainer.innerHTML = workshop.nodes.map(n => `
      <div class="flex flex-col items-center text-center p-2" id="node-${n.id}">
        <div class="node-circle mb-2.5" id="circle-${n.id}">
          <span class="label-mono font-bold text-lime text-xs">${n.id.substring(0, 3).toUpperCase()}</span>
        </div>
        <div class="text-xs font-semibold text-paper">${n.label}</div>
        <div class="text-[11px] text-dim font-mono hidden md:block">${n.sub}</div>
      </div>
    `).join('');
  }

  function renderJourneyTabs() {
    journeysNav.innerHTML = workshop.journeys.map((j, idx) => `
      <button type="button" class="px-4 py-2 text-xs md:text-sm font-mono rounded-lg transition-all ${idx === currentJourneyIndex ? 'bg-lime text-ink font-semibold' : 'bg-ink border border-line text-muted hover:text-paper hover:border-line-strong'}" data-journey-idx="${idx}">
        ${j.title}
      </button>
    `).join('');

    journeysNav.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        stopPlayback();
        currentJourneyIndex = parseInt(btn.getAttribute('data-journey-idx'));
        currentStepIndex = 0;
        renderJourneyTabs();
        loadJourney();
      });
    });
  }

  function loadJourney() {
    const journey = workshop.journeys[currentJourneyIndex];
    if (journeyTitleEl) journeyTitleEl.innerHTML = `<span class="text-lime">●</span> ${journey.project} · <span class="text-dim">${journey.tag}</span>`;

    // Render step buttons
    if (stepsList) {
      stepsList.innerHTML = journey.steps.map((st, idx) => `
        <button type="button" class="trace-step-btn w-full ${idx === currentStepIndex ? 'active' : ''}" data-step-idx="${idx}">
          <div class="flex items-center gap-2">
            <span class="text-lime font-bold">0${idx + 1}</span>
            <span class="truncate">${st.label}</span>
          </div>
        </button>
      `).join('');

      stepsList.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => {
          stopPlayback();
          currentStepIndex = parseInt(b.getAttribute('data-step-idx'));
          updateStepView();
        });
      });
    }

    updateStepView();
  }

  function updateStepView() {
    const journey = workshop.journeys[currentJourneyIndex];
    const step = journey.steps[currentStepIndex];
    if (!step) return;

    // Highlight step button
    if (stepsList) {
      stepsList.querySelectorAll('.trace-step-btn').forEach((b, idx) => {
        if (idx === currentStepIndex) b.classList.add('active');
        else b.classList.remove('active');
      });
    }

    // Update hop window
    if (activeHopTag) activeHopTag.textContent = `HOP 0${currentStepIndex + 1} / 0${journey.steps.length}`;
    if (activeHopCode) activeHopCode.textContent = step.code || step.label;
    if (activeHopDetail) activeHopDetail.textContent = step.detail;

    // Highlight active nodes in graph
    workshop.nodes.forEach(n => {
      const circle = document.getElementById(`circle-${n.id}`);
      if (circle) {
        if (n.id === step.from || n.id === step.to) {
          circle.classList.add('active-node');
        } else {
          circle.classList.remove('active-node');
        }
      }
    });
  }

  function stopPlayback() {
    if (isPlaying) {
      isPlaying = false;
      clearInterval(timer);
      if (playBtn) playBtn.innerHTML = '▶ Play';
    }
  }

  function startPlayback() {
    isPlaying = true;
    if (playBtn) playBtn.innerHTML = '❚❚ Pause';
    timer = setInterval(() => {
      const journey = workshop.journeys[currentJourneyIndex];
      if (currentStepIndex < journey.steps.length - 1) {
        currentStepIndex++;
      } else {
        currentStepIndex = 0;
      }
      updateStepView();
    }, 2400);
  }

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (isPlaying) stopPlayback();
      else startPlayback();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopPlayback();
      if (currentStepIndex > 0) {
        currentStepIndex--;
        updateStepView();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopPlayback();
      const journey = workshop.journeys[currentJourneyIndex];
      if (currentStepIndex < journey.steps.length - 1) {
        currentStepIndex++;
        updateStepView();
      }
    });
  }

  // Initialize view
  renderJourneyTabs();
  loadJourney();
}

/* -------------------------------------------------------------
 * 4. SELECTED WORK & CASE STUDIES
 * ------------------------------------------------------------- */
function initProjects(projects, moreProjects) {
  const container = document.getElementById('featured-projects-container');
  const moreContainer = document.getElementById('more-builds-list');

  if (container) {
    container.innerHTML = projects.map(proj => `
      <article class="case-card p-6 md:p-10 mb-12" id="project-${proj.slug}">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Column: Story & Meta -->
          <div class="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="font-mono text-lime font-bold text-sm">${proj.index}</span>
                <span class="h-3 w-px bg-line-strong"></span>
                <span class="label-mono text-dim">${proj.category}</span>
              </div>

              <h3 class="text-2xl md:text-3xl font-bold text-paper mb-4">${proj.title}</h3>
              <p class="text-base text-muted leading-relaxed mb-6">${proj.summary}</p>

              <!-- Highlights -->
              <div class="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-ink/70 border border-line">
                ${proj.highlights.map(h => `
                  <div>
                    <div class="font-mono font-bold text-lime text-base md:text-lg">${h.value}</div>
                    <div class="text-[11px] text-dim font-mono leading-tight">${h.label}</div>
                  </div>
                `).join('')}
              </div>

              <!-- Tech Stack Pills -->
              <div class="flex flex-wrap gap-2 mb-8">
                ${proj.stack.map(st => `
                  <span class="px-2.5 py-1 text-xs font-mono rounded bg-ink border border-line text-muted">${st}</span>
                `).join('')}
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-line w-full sm:w-auto">
              <button type="button" class="btn-primary open-case-study w-full sm:w-auto text-center justify-center" data-slug="${proj.slug}">
                Read Case Study & Architecture →
              </button>
              <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline w-full sm:w-auto text-center justify-center">
                Visit Live Site ↗
              </a>
            </div>
          </div>

          <!-- Right Column: Abstract Architectural Visualization -->
          <div class="lg:col-span-5">
            <div class="diagram-box p-6 aspect-[4/3] flex flex-col justify-between">
              <div class="flex items-center justify-between text-xs font-mono text-dim pb-3 border-b border-line">
                <span>SCHEMATIC // ${proj.index}</span>
                <span class="text-lime">● ACTIVE</span>
              </div>
              
              <div class="my-auto py-4 text-center">
                <div class="font-mono text-xs text-lime mb-2">// ${proj.category.split('·')[0].trim()} PIPELINE</div>
                <div class="p-3 bg-ink/90 border border-line-strong rounded-lg font-mono text-xs text-paper text-left max-h-40 overflow-hidden">
                  <div class="text-dim">// Client to Server Flow</div>
                  <div class="text-lime">↳ ${proj.challenges[0] ? proj.challenges[0].title : 'Architecture Core'}</div>
                  <div class="text-[11px] text-muted mt-2 truncate">stack: ${proj.stack.slice(0, 4).join(', ')}</div>
                </div>
              </div>

              <div class="flex items-center justify-between text-[11px] font-mono text-dim pt-2 border-t border-line">
                <span>LATENCY: OPTIMIZED</span>
                <span>STATE: RECOVERY-READY</span>
              </div>
            </div>
          </div>

        </div>
      </article>
    `).join('');

    // Attach case study modal openers
    container.querySelectorAll('.open-case-study').forEach(btn => {
      btn.addEventListener('click', () => {
        const slug = btn.getAttribute('data-slug');
        const proj = projects.find(p => p.slug === slug);
        if (proj) openProjectModal(proj);
      });
    });
  }

  // More Builds list
  if (moreContainer && moreProjects) {
    moreContainer.innerHTML = moreProjects.map((p, idx) => `
      <li class="border-b border-line hover:border-lime/40 transition-all group">
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="flex flex-col md:flex-row md:items-center justify-between py-5 px-3 rounded-lg group-hover:bg-lime/5 transition-all">
          <div class="flex items-baseline gap-4 mb-2 md:mb-0">
            <span class="font-mono text-xs text-dim group-hover:text-lime">0${idx + 1}</span>
            <span class="text-lg font-semibold text-paper group-hover:text-lime transition-colors">${p.title}</span>
            <span class="text-xs text-dim font-mono hidden sm:inline">(${p.category})</span>
          </div>
          <div class="flex items-center gap-4 text-xs font-mono text-muted">
            <span>${p.tag}</span>
            <span class="text-paper group-hover:translate-x-1 transition-transform">↗</span>
          </div>
        </a>
      </li>
    `).join('');
  }
}

/* -------------------------------------------------------------
 * 5. EXPERIENCE & EDUCATION
 * ------------------------------------------------------------- */
function initExperience(experience, education, certifications) {
  const expContainer = document.getElementById('experience-timeline-container');
  const eduContainer = document.getElementById('education-container');
  const certContainer = document.getElementById('certifications-container');

  if (expContainer) {
    expContainer.innerHTML = experience.map(exp => `
      <div class="p-6 md:p-8 rounded-2xl bg-ink-2 border border-line mb-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <div class="flex items-center gap-3">
              <h3 class="text-xl font-bold text-paper">${exp.company}</h3>
              ${exp.current ? '<span class="text-xs font-mono px-2 py-0.5 rounded-full bg-lime text-ink font-semibold">Now</span>' : ''}
            </div>
            <div class="text-sm font-semibold text-lime">${exp.title}</div>
          </div>
          <div class="text-xs font-mono text-dim flex items-center gap-3">
            <span>${exp.start} — ${exp.end}</span>
            <span>·</span>
            <span>${exp.location}</span>
          </div>
        </div>

        <ul class="space-y-2 mb-6">
          ${exp.points.map(pt => `
            <li class="text-sm text-muted flex items-start gap-3">
              <span class="text-lime mt-1 font-mono">↳</span>
              <span class="leading-relaxed">${pt}</span>
            </li>
          `).join('')}
        </ul>

        <div class="flex flex-wrap gap-2 pt-4 border-t border-line">
          ${exp.stack.map(st => `
            <span class="px-2 py-0.5 text-xs font-mono rounded bg-ink border border-line text-dim">${st}</span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  if (eduContainer && education) {
    eduContainer.innerHTML = education.map(edu => `
      <div class="p-6 rounded-2xl bg-ink-2 border border-line">
        <div class="font-mono text-xs text-lime mb-1">${edu.year}</div>
        <h4 class="text-base font-bold text-paper mb-1">${edu.qualification}</h4>
        <div class="text-sm text-dim mb-2">${edu.institution}</div>
        ${edu.details ? `<div class="text-xs text-muted font-mono">${edu.details}</div>` : ''}
      </div>
    `).join('');
  }

  if (certContainer && certifications) {
    certContainer.innerHTML = certifications.map(cert => `
      <div class="p-6 rounded-2xl bg-ink-2 border border-line">
        <div class="font-mono text-xs text-lime mb-1">${cert.year}</div>
        <h4 class="text-base font-bold text-paper mb-1">${cert.qualification}</h4>
        <div class="text-sm text-dim">${cert.institution}</div>
      </div>
    `).join('');
  }
}

/* -------------------------------------------------------------
 * 6. ENGINEERING PRINCIPLES (Quiet Engineering)
 * ------------------------------------------------------------- */
function initPrinciples(principles) {
  const container = document.getElementById('principles-container');
  if (!container) return;

  container.innerHTML = principles.map(pr => `
    <div class="p-6 md:p-8 rounded-2xl bg-ink-2 border border-line hover:border-line-strong transition-all">
      <div class="font-mono text-xs text-lime font-bold mb-3">${pr.index}</div>
      <h3 class="text-xl font-bold text-paper mb-3">${pr.title}</h3>
      <p class="text-sm md:text-base text-muted leading-relaxed">${pr.body}</p>
    </div>
  `).join('');
}

/* -------------------------------------------------------------
 * 7. CONTACT & EMAIL ACTIONS
 * ------------------------------------------------------------- */
function initContact(profile) {
  const emailEl = document.getElementById('contact-email-text');
  const copyBtn = document.getElementById('copy-email-btn');
  const directMailLinks = document.querySelectorAll('.direct-mail-link');
  const phoneLinks = document.querySelectorAll('.contact-phone-link');
  const socialsList = document.getElementById('contact-socials-list');

  if (emailEl) emailEl.textContent = profile.email;

  directMailLinks.forEach(el => {
    el.setAttribute('href', `mailto:${profile.email}`);
  });

  phoneLinks.forEach(el => {
    el.setAttribute('href', `tel:${profile.phone.replace(/[^0-9+]/g, '')}`);
    el.textContent = profile.phone;
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(profile.email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast('Direct email: ' + profile.email);
      });
    });
  }

  if (socialsList && profile.socials) {
    socialsList.innerHTML = profile.socials.map(s => `
      <a href="${s.href}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-4 rounded-xl bg-ink-2 border border-line hover:border-lime/50 transition-all group">
        <div>
          <div class="text-sm font-semibold text-paper group-hover:text-lime transition-colors">${s.label}</div>
          <div class="text-xs text-dim font-mono">${s.handle}</div>
        </div>
        <span class="text-muted group-hover:text-lime group-hover:translate-x-1 transition-all">↗</span>
      </a>
    `).join('');
  }
}

/* -------------------------------------------------------------
 * 8. NAVIGATION OBSERVER & SMOOTH SCROLL
 * ------------------------------------------------------------- */
function initNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(sec => observer.observe(sec));
}

/* -------------------------------------------------------------
 * 9. MODALS & TOAST NOTIFICATION
 * ------------------------------------------------------------- */
function openProjectModal(project) {
  const modal = document.getElementById('case-study-modal');
  const title = document.getElementById('modal-project-title');
  const category = document.getElementById('modal-project-category');
  const context = document.getElementById('modal-project-context');
  const builtList = document.getElementById('modal-project-built');
  const challengesList = document.getElementById('modal-project-challenges');
  const liveBtn = document.getElementById('modal-live-btn');

  if (!modal) return;

  if (title) title.textContent = project.title;
  if (category) category.textContent = `${project.index} // ${project.category}`;
  if (context) context.textContent = project.context;

  if (builtList) {
    builtList.innerHTML = project.built.map(b => `
      <li class="text-sm text-[#d5d2c8] flex items-start gap-2.5">
        <span class="text-lime mt-0.5">✓</span>
        <span>${b}</span>
      </li>
    `).join('');
  }

  if (challengesList) {
    challengesList.innerHTML = project.challenges.map(c => `
      <div class="p-4 rounded-xl bg-ink/70 border border-line">
        <div class="font-bold text-sm text-lime mb-1">${c.title}</div>
        <div class="text-xs text-muted leading-relaxed">${c.detail}</div>
      </div>
    `).join('');
  }

  if (liveBtn) {
    liveBtn.setAttribute('href', project.liveUrl);
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function initModals() {
  const modal = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Escape key closes modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* -------------------------------------------------------------
 * 10. 3D PHOTO CARD PARALLAX ENGINE
 * Modeled on the 3D Plate & Subject in ankit-portfolio-data-ten
 * ------------------------------------------------------------- */
function init3DPhotoCard() {
  const card = document.getElementById('interactive-photo-card');
  const container = document.getElementById('photo-3d-container');
  const sheen = document.getElementById('photo-3d-sheen');

  if (!card || !container) return;

  let currentRotateX = 0;
  let currentRotateY = 0;
  let currentTranslateY = 0;

  let targetRotateX = 0;
  let targetRotateY = 0;
  let targetTranslateY = 0;

  let isHovered = false;
  let animFrameId = null;
  let isVisible = true;

  // LERP helper
  const lerp = (start, end, factor) => start + (end - start) * factor;

  // Track mouse on window & container
  function handlePointerMove(e) {
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - cardCenterX) / (window.innerWidth * 0.4);
    const deltaY = (e.clientY - cardCenterY) / (window.innerHeight * 0.4);

    // Clamp rotation angles (-18 to +18 deg)
    const clampedX = Math.max(-1, Math.min(1, deltaX));
    const clampedY = Math.max(-1, Math.min(1, deltaY));

    targetRotateY = clampedX * 18;
    targetRotateX = -clampedY * 15;
    targetTranslateY = isHovered ? -8 : 0;

    // Update specular sheen position
    if (sheen) {
      const sheenX = ((e.clientX - rect.left) / rect.width) * 100;
      const sheenY = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${sheenX}%`);
      card.style.setProperty('--mouse-y', `${sheenY}%`);
    }
  }

  container.addEventListener('mouseenter', () => {
    isHovered = true;
  });

  container.addEventListener('mouseleave', () => {
    isHovered = false;
  });

  // Mobile touch drag interaction
  container.addEventListener('touchstart', () => {
    isHovered = true;
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 0) {
      const touch = e.touches[0];
      handlePointerMove({
        clientX: touch.clientX,
        clientY: touch.clientY,
        pointerType: 'touch'
      });
    }
  }, { passive: true });

  container.addEventListener('touchend', () => {
    isHovered = false;
  }, { passive: true });

  window.addEventListener('pointermove', handlePointerMove, { passive: true });

  // Main 60fps Animation Loop
  function animate(now) {
    if (!isVisible) {
      animFrameId = requestAnimationFrame(animate);
      return;
    }

    if (!isHovered) {
      // Autonomous harmonic 3D floating movement when idle
      const t = now * 0.0015;
      targetRotateX = Math.sin(t * 0.7) * 6;
      targetRotateY = Math.cos(t * 0.5) * 8;
      targetTranslateY = Math.sin(t * 1.1) * 7;
    }

    // Smooth linear interpolation (inertia damping)
    currentRotateX = lerp(currentRotateX, targetRotateX, 0.08);
    currentRotateY = lerp(currentRotateY, targetRotateY, 0.08);
    currentTranslateY = lerp(currentTranslateY, targetTranslateY, 0.08);

    card.style.transform = `rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) translateY(${currentTranslateY.toFixed(2)}px)`;

    animFrameId = requestAnimationFrame(animate);
  }

  // IntersectionObserver to save GPU/CPU cycles when off-screen
  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0.1 });
  observer.observe(container);

  animFrameId = requestAnimationFrame(animate);
}

/* -------------------------------------------------------------
 * 11. GLOBAL CURSOR LIGHT & INTERACTIVE SPRING CURSOR
 * ------------------------------------------------------------- */
function initCursorEffects() {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isFinePointer || prefersReducedMotion) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  const text = document.getElementById('cursor-text');
  const spotlight = document.getElementById('cursor-spotlight');

  if (!dot || !ring) return;

  document.documentElement.classList.add('has-custom-cursor');
  document.body.classList.add('has-cursor');

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let isVisible = false;

  const lerp = (a, b, n) => a + (b - a) * n;

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;

    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      if (spotlight) spotlight.style.opacity = '1';
    }

    // Direct update on dot
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

    // Update global spotlight CSS variables
    document.body.style.setProperty('--cursor-x', `${mouseX}px`);
    document.body.style.setProperty('--cursor-y', `${mouseY}px`);

    // Detect clickable hover states
    const target = e.target;
    const clickable = target && target.closest('a, button, [role="button"], input, textarea, select, .tool-pill, .trace-step-btn');
    const badge = target && target.closest('[data-cursor]');

    if (badge) {
      ring.classList.add('active-badge');
      ring.classList.remove('active-hover');
      if (text) text.textContent = badge.getAttribute('data-cursor') || 'VIEW';
    } else if (clickable) {
      ring.classList.add('active-hover');
      ring.classList.remove('active-badge');
      if (text) text.textContent = '';
    } else {
      ring.classList.remove('active-hover', 'active-badge');
      if (text) text.textContent = '';
    }

    // Card spotlight coordinate updates
    const card = target && target.closest('.case-card, .workshop-card');
    if (card) {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--card-mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--card-mouse-y', `${e.clientY - rect.top}px`);
    }
  }, { passive: true });

  document.addEventListener('pointerleave', () => {
    isVisible = false;
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    if (spotlight) spotlight.style.opacity = '0';
  });

  // Smooth ring follow loop
  function loop() {
    if (isVisible) {
      ringX = lerp(ringX, mouseX, 0.18);
      ringY = lerp(ringY, mouseY, 0.18);
      ring.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0) translate(-50%, -50%)`;
    }
    requestAnimationFrame(loop);
  }
  loop();
}

/* -------------------------------------------------------------
 * 12. HERO INTERACTIVE ILLUMINATED DOT MATRIX CANVAS
 * Exact blueprint grid that illuminates under the cursor
 * ------------------------------------------------------------- */
function initHeroMatrixCanvas() {
  const canvas = document.getElementById('hero-matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let pointer = { x: -1000, y: -1000, active: false };
  let animId = null;
  let isHeroVisible = true;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const rect = canvas.getBoundingClientRect();
    pointer.x = e.clientX - rect.left;
    pointer.y = e.clientY - rect.top;
    pointer.active = true;
  }, { passive: true });

  document.documentElement.addEventListener('pointerleave', () => {
    pointer.active = false;
  });

  const spacing = 32;
  const radius = 175;

  function draw(time) {
    if (!isHeroVisible) {
      animId = requestAnimationFrame(draw);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    const cols = Math.floor(width / spacing) + 1;
    const rows = Math.floor(height / spacing) + 1;
    const offsetX = (width - (cols - 1) * spacing) / 2;
    const offsetY = (height - (rows - 1) * spacing) / 2;

    for (let r = 0; r < rows; r++) {
      const y = offsetY + r * spacing;
      for (let c = 0; c < cols; c++) {
        const x = offsetX + c * spacing;

        // Proximity calculation to cursor
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const factor = Math.max(0, 1 - dist / radius);
        const weight = factor * factor;

        // Ambient sine wave pulsing
        const wave = 0.5 + 0.5 * Math.sin(0.008 * x + 0.006 * y - 0.001 * time);

        let size = 1.2 + 0.6 * wave + 2.2 * weight;

        if (weight > 0.02) {
          // Illuminated lime particle under cursor light
          ctx.fillStyle = `rgba(200, 255, 46, ${Math.min(1, 0.25 + 0.75 * weight)})`;
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
        } else {
          // Ambient blueprint dot
          ctx.fillStyle = `rgba(241, 237, 227, ${0.04 + 0.04 * wave})`;
          ctx.fillRect(x - 0.6, y - 0.6, 1.2, 1.2);
        }
      }
    }

    // Soft radial spotlight centered at cursor
    if (pointer.active && pointer.x >= 0 && pointer.x <= width && pointer.y >= 0 && pointer.y <= height) {
      const grad = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, radius * 1.2);
      grad.addColorStop(0, 'rgba(200, 255, 46, 0.09)');
      grad.addColorStop(1, 'rgba(200, 255, 46, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    }

    animId = requestAnimationFrame(draw);
  }

  const observer = new IntersectionObserver((entries) => {
    isHeroVisible = entries[0].isIntersecting;
  }, { threshold: 0.05 });
  observer.observe(canvas.parentElement);

  animId = requestAnimationFrame(draw);
}

/* -------------------------------------------------------------
 * 13. INTRO OVERLAY ANIMATION
 * Exact staggered letter reveal matching the original website
 * ------------------------------------------------------------- */
function initIntroAnimation(profile) {
  const container = document.getElementById('intro-letters-container');
  const overlay = document.getElementById('intro-overlay');
  const inner = document.querySelector('.intro-inner');
  if (!container || !overlay) return;

  const fullName = (profile.name || "Deepak Bourai").toUpperCase();
  const letters = fullName.split("");

  container.innerHTML = letters.map((char, index) => {
    if (char === " ") {
      return `<span style="animation-delay: ${35 * index}ms; min-width: 0.28em;">&nbsp;</span>`;
    }
    return `<span style="animation-delay: ${35 * index}ms">${char}</span>`;
  }).join('');

  // Dynamic autofit: guarantees the full name fits with zero clipping on any screen
  function fitText() {
    if (!inner) return;
    const availableWidth = inner.clientWidth - 16;
    let currentFontSize = parseFloat(window.getComputedStyle(container).fontSize);
    
    // Scale down dynamically if needed until it fits cleanly with breathing room
    let attempts = 0;
    while (container.scrollWidth > availableWidth && currentFontSize > 18 && attempts < 40) {
      currentFontSize -= 1.5;
      container.style.fontSize = `${currentFontSize}px`;
      attempts++;
    }
  }

  fitText();
  window.addEventListener('resize', fitText);

  // Remove overlay after animation completes (2.25s)
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 2250);
}

/* -------------------------------------------------------------
 * 14. NAVIGATION LIVE LOCAL TIME CLOCK (Noida, India)
 * ------------------------------------------------------------- */
function initNavClock() {
  const timeEl = document.getElementById('nav-local-time');
  if (!timeEl) return;

  function update() {
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
      });
      timeEl.textContent = formatter.format(now);
    } catch (e) {
      const now = new Date();
      timeEl.textContent = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    }
  }

  update();
  setInterval(update, 10000);
}

/* -------------------------------------------------------------
 * 15. MOBILE NAVIGATION MENU DRAWER
 * ------------------------------------------------------------- */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!btn || !menu) return;

  let isOpen = false;

  function toggle(open) {
    isOpen = typeof open === 'boolean' ? open : !isOpen;
    btn.setAttribute('aria-expanded', isOpen.toString());
    if (isOpen) {
      menu.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');
    } else {
      menu.classList.remove('open');
      document.body.style.overflow = '';
      if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    }
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggle();
  });

  menu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle(false);
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      toggle(false);
    }
  });
}
