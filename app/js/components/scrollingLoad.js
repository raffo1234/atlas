export function scrollingLoad() {
  if (!$('.scrolling-load').length) return false;

  const DELAY_TIME = 100;
  let wrapper = $('.scrolling-load');
  let items = wrapper.find('article');
  let total = items.length;
  let n = 0;
  let page = 0;
  let appearingFinished = true;

  const appear = (n, items) => {
    appearingFinished = false;
    setTimeout(() => {
      if (n >= total) {
        appearingFinished = true;
        return false;
      }
      items.eq(n).addClass('active');
      appear(n + 1, items);
    }, DELAY_TIME);
  }

  appear(n, items);

  $(window).scroll(function() {
    if (!appearingFinished) return false;

    if ($(window).scrollTop() == $(document).height() - $(window).height()) {

      $.ajax({
          type: 'post',
          url: 'embalajes.php',
          data: { currentPage: n++ }
      })
      .done(function(response) {
        const responseLength = response.length;
        let html = '';
        response.map(function(n, i) {
          html += '<article><img src="'+ n.imageSrc +'" alt="'+ n.imageAlt +'"></article>';
        });
        wrapper.append(html);
        items = wrapper.find('article');
        appear(total, items);
        total = total + responseLength;
      })
      .fail(function(data) {
        console.log(data);
      });
    }
  });
}
