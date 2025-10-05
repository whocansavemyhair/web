/* 智能伸展：short 若独占一行，则自动占满整行 */
(function () {
  function getColumnCount(grid) {
    const cs = window.getComputedStyle(grid);
    const tpl = cs.gridTemplateColumns;
    if (!tpl || tpl === 'none') return 1;
    // 列定义里可能包含函数，如 minmax(...)，用 split 简单计数即可
    return tpl.split(' ').length;
  }

  function buildRows(items, cols) {
    const rows = [];
    let current = [];
    let remaining = cols;

    items.forEach(item => {
      // long 视为跨所有列；short 占 1 列
      const isLong = item.classList.contains('long');
      const span = isLong ? cols : 1;

      if (span > remaining) {
        rows.push(current);
        current = [];
        remaining = cols;
      }

      current.push(item);
      remaining -= span;

      if (remaining === 0) {
        rows.push(current);
        current = [];
        remaining = cols;
      }
    });

    if (current.length) rows.push(current);
    return rows;
  }

  function updateNewsGrid() {
    const grid = document.querySelector('.news-grid');
    if (!grid) return;

    const cards = Array.from(grid.children).filter(el => el.classList.contains('news-card'));
    // 清除历史状态
    cards.forEach(el => el.classList.remove('single'));

    const cols = getColumnCount(grid);
    if (cols <= 1) return; // 移动端（1列）不做处理

    const rows = buildRows(cards, cols);

    rows.forEach(row => {
      if (row.length === 1) {
        const only = row[0];
        // 仅当是 short 且独占一行时，拉满整行
        if (only.classList.contains('short') && !only.classList.contains('long')) {
          only.classList.add('single');
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', updateNewsGrid);
  window.addEventListener('resize', updateNewsGrid);
})();
