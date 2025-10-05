  // Toggle section
  function toggleSection(header) {
    header.classList.toggle('collapsed');
    const content = header.nextElementSibling;

    if (content.classList.contains('collapsed')) {
      content.classList.remove('collapsed');
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      setTimeout(() => {
        content.classList.add('collapsed');
        content.style.maxHeight = '0';
      }, 10);
    }
  }

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('show');
  }

  // Initialize sections
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-content').forEach(content => {
      content.style.maxHeight = content.scrollHeight + 'px';
    });

    // Scroll spy
    const sections = document.querySelectorAll('.section');
    const tocLinks = document.querySelectorAll('.toc a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });

    createModGrid();
    createFlowDiagram();
    createCharts();
  });

  // Create interactive modification grid
  function createModGrid() {
    const grid = document.getElementById('modGrid');
    const tooltip = document.getElementById('mcTooltip');

    const exampleBuild = [
      {x:0, y:0, type:'projectile', icon:'🎯', name:'Projectile: Bullet', desc:'Root card. Fires bullet projectiles.', arrows:{south:'output'}},
      {x:0, y:1, type:'effect', icon:'💥', name:'Damage Card', desc:'Sets projectile damage', arrows:{north:'input'}},
      {x:0, y:2, type:'base-value', icon:'🎲', name:'Base Value: 2-10', desc:'Randomizes to value between 2-10 on compile', arrows:{east:'output'}},
      {x:1, y:2, type:'variable', icon:'X', name:'Variable: x', desc:'Local variable storing base value', arrows:{west:'input', south:'output'}},
      {x:0, y:3, type:'base-value', icon:'🎲', name:'Base Value: 2-5', desc:'Randomizes to value between 2-5 on compile', arrows:{east:'output'}},
      {x:1, y:3, type:'variable', icon:'Y', name:'Variable: y', desc:'Local variable storing base value', arrows:{west:'input', south:'output'}},
      {x:1, y:4, type:'junction', icon:'⊕', name:'Junction: Combine', desc:'Combines inputs for formulation', arrows:{north:'input', south:'output'}},
      {x:1, y:5, type:'formulation', icon:'∧', name:'Formulation: x^y', desc:'Calculates x to the power of y', arrows:{north:'input', north2:'input', east:'output'}},
      {x:2, y:5, type:'effect', icon:'💥', name:'Damage Output', desc:'Final damage value', arrows:{west:'input'}}
    ];

    for (let y = 0; y < 6; y++) {
      for (let x = 0; x < 9; x++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.dataset.x = x;
        cell.dataset.y = y;

        const cardData = exampleBuild.find(c => c.x === x && c.y === y);

        if (cardData) {
          cell.classList.add('has-card', cardData.type);
          cell.innerHTML = `<div class="card-icon">${cardData.icon}</div>`;

          // Add arrows
          if (cardData.arrows) {
            Object.entries(cardData.arrows).forEach(([dir, type]) => {
              const arrow = document.createElement('i');
              arrow.className = `fas fa-arrow-${type === 'output' ? 'up' : 'down'} arrow ${dir} ${type}`;
              cell.appendChild(arrow);
            });
          }

          // Tooltip
          cell.addEventListener('mouseenter', (e) => {
            tooltip.innerHTML = `
              <div class="title">${cardData.name}</div>
              <div class="desc">${cardData.desc}</div>
              ${cardData.arrows ? `<div class="stat">Arrows: ${Object.entries(cardData.arrows).map(([d,t]) => `${d}=${t}`).join(', ')}</div>` : ''}
            `;
            tooltip.classList.add('show');
            tooltip.style.left = e.pageX + 20 + 'px';
            tooltip.style.top = e.pageY - 20 + 'px';
          });

          cell.addEventListener('mouseleave', () => {
            tooltip.classList.remove('show');
          });
        }

        grid.appendChild(cell);
      }
    }
  }

  // Create Joint.js flow diagram
  function createFlowDiagram() {
    const namespace = joint.shapes;
    const graph = new joint.dia.Graph({}, { cellNamespace: namespace });

    const paper = new joint.dia.Paper({
      el: document.getElementById('flowDiagram'),
      model: graph,
      width: '100%',
      height: 400,
      gridSize: 10,
      background: { color: 'rgba(30, 41, 59, 0.5)' },
      cellViewNamespace: namespace
    });

    const projectile = new joint.shapes.standard.Rectangle({
      position: { x: 50, y: 50 },
      size: { width: 120, height: 60 },
      attrs: {
        body: { fill: '#06b6d4', stroke: '#0e7490', strokeWidth: 2, rx: 8, ry: 8 },
        label: { text: 'Projectile:\nBullet', fill: '#ffffff', fontSize: 12 }
      }
    });

    const baseX = new joint.shapes.standard.Rectangle({
      position: { x: 50, y: 180 },
      size: { width: 100, height: 50 },
      attrs: {
        body: { fill: '#10b981', stroke: '#059669', strokeWidth: 2, rx: 8, ry: 8 },
        label: { text: 'Base: 2-10', fill: '#ffffff', fontSize: 11 }
      }
    });

    const varX = new joint.shapes.standard.Rectangle({
      position: { x: 200, y: 180 },
      size: { width: 80, height: 50 },
      attrs: {
        body: { fill: '#3b82f6', stroke: '#1d4ed8', strokeWidth: 2, rx: 8, ry: 8 },
        label: { text: 'Var: x', fill: '#ffffff', fontSize: 11 }
      }
    });

    const baseY = new joint.shapes.standard.Rectangle({
      position: { x: 50, y: 260 },
      size: { width: 100, height: 50 },
      attrs: {
        body: { fill: '#10b981', stroke: '#059669', strokeWidth: 2, rx: 8, ry: 8 },
        label: { text: 'Base: 2-5', fill: '#ffffff', fontSize: 11 }
      }
    });

    const varY = new joint.shapes.standard.Rectangle({
      position: { x: 200, y: 260 },
      size: { width: 80, height: 50 },
      attrs: {
        body: { fill: '#3b82f6', stroke: '#1d4ed8', strokeWidth: 2, rx: 8, ry: 8 },
        label: { text: 'Var: y', fill: '#ffffff', fontSize: 11 }
      }
    });

    const junction = new joint.shapes.standard.Circle({
      position: { x: 340, y: 210 },
      size: { width: 60, height: 60 },
      attrs: {
        body: { fill: '#64748b', stroke: '#475569', strokeWidth: 2 },
        label: { text: 'Junction', fill: '#ffffff', fontSize: 10 }
      }
    });

    const formula = new joint.shapes.standard.Rectangle({
      position: { x: 450, y: 210 },
      size: { width: 100, height: 60 },
      attrs: {
        body: { fill: '#ef4444', stroke: '#dc2626', strokeWidth: 2, rx: 8, ry: 8 },
        label: { text: 'Formula:\nx^y', fill: '#ffffff', fontSize: 12 }
      }
    });

    const damage = new joint.shapes.standard.Rectangle({
      position: { x: 600, y: 50 },
      size: { width: 100, height: 60 },
      attrs: {
        body: { fill: '#f59e0b', stroke: '#d97706', strokeWidth: 2, rx: 8, ry: 8 },
        label: { text: 'Damage\nCard', fill: '#ffffff', fontSize: 12 }
      }
    });

    graph.addCells([projectile, baseX, varX, baseY, varY, junction, formula, damage]);

    const linkStyle = {
      line: {
        stroke: '#10b981',
        strokeWidth: 3,
        targetMarker: { type: 'path', d: 'M 10 -5 0 0 10 5 z', fill: '#10b981' }
      }
    };

    graph.addCells([
      new joint.shapes.standard.Link({ source: { id: projectile.id }, target: { id: damage.id }, attrs: linkStyle }),
      new joint.shapes.standard.Link({ source: { id: baseX.id }, target: { id: varX.id }, attrs: linkStyle }),
      new joint.shapes.standard.Link({ source: { id: baseY.id }, target: { id: varY.id }, attrs: linkStyle }),
      new joint.shapes.standard.Link({ source: { id: varX.id }, target: { id: junction.id }, attrs: linkStyle }),
      new joint.shapes.standard.Link({ source: { id: varY.id }, target: { id: junction.id }, attrs: linkStyle }),
      new joint.shapes.standard.Link({ source: { id: junction.id }, target: { id: formula.id }, attrs: linkStyle }),
      new joint.shapes.standard.Link({ source: { id: formula.id }, target: { id: damage.id }, attrs: linkStyle })
    ]);
  }

  // Create charts
  function createCharts() {
    // Success Rate Chart
    const successCtx = document.getElementById('successChart');
    const ratios = [];
    const successes = [];

    for (let r = 0; r <= 1; r += 0.01) {
      ratios.push((r * 100).toFixed(0));
      let success;
      if (r >= 0.98) success = 100;
      else if (r >= 0.90) success = 95 + (r - 0.90) * 625;
      else if (r >= 0.70) success = 50 + (r - 0.70) * 225;
      else success = r * 71.4;
      successes.push(success);
    }

    new Chart(successCtx, {
      type: 'line',
      data: {
        labels: ratios,
        datasets: [{
          label: 'Success Chance %',
          data: successes,
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#f1f5f9', font: { size: 14 } } },
          title: { display: true, text: 'Exponential Compile Success Curve', color: '#f1f5f9', font: { size: 16, weight: 600 } }
        },
        scales: {
          x: {
            title: { display: true, text: 'FE/t Provided (% of Required)', color: '#94a3b8' },
            ticks: { color: '#94a3b8', callback: function(value, index) { return index % 10 === 0 ? this.getLabelForValue(value) + '%' : ''; } },
            grid: { color: 'rgba(148, 163, 184, 0.1)' }
          },
          y: {
            title: { display: true, text: 'Success Chance %', color: '#94a3b8' },
            ticks: { color: '#94a3b8' },
            grid: { color: 'rgba(148, 163, 184, 0.1)' }
          }
        }
      }
    });

    // Materials Chart
    const materialsCtx = document.getElementById('materialsChart');
    new Chart(materialsCtx, {
      type: 'doughnut',
      data: {
        labels: ['Cerulite (Common)', 'Neodyte (Uncommon)', 'Lanthite (Rare)', 'Chronite (Very Rare)'],
        datasets: [{
          data: [40, 35, 20, 5],
          backgroundColor: ['rgba(6, 182, 212, 0.8)', 'rgba(139, 92, 246, 0.8)', 'rgba(245, 158, 11, 0.8)', 'rgba(241, 245, 249, 0.8)'],
          borderColor: ['#06b6d4', '#8b5cf6', '#f59e0b', '#f1f5f9'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { color: '#f1f5f9', font: { size: 14 }, padding: 20 } },
          title: { display: true, text: 'Rare Earth Material Distribution', color: '#f1f5f9', font: { size: 16, weight: 600 } }
        }
      }
    });
  }
