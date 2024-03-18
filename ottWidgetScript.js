const showRatingInfo = (rating) => {
  const ratingNode = document.getElementById('ottWidgetRating');
  ratingNode.textContent = rating.score.toString();
  ratingNode.style.display = 'block';
  const mainCaptionNode = document.getElementById('ottWidgetMainCaption');
  mainCaptionNode.textContent = rating.text;
  const subCaptionNode = widgetElement.getElementById('ottWidgetSubCaption');
  subCaptionNode.textContent = 'Оценка клиентов';
}
const updateWidget = async () => {
  const widgetElement = document.getElementById('ottWidget');
  const hotelId = widgetElement.dataset.hotelId;
  const response = await fetch('https://www.onetwotrip.com/_hotels/external/extranet/hotel/' + hotelId + '/widget');
  const { 
    result: { 
      isWidgetAvailable,
      url, 
      rating
    },
  } = await response.json();
  if (!isWidgetAvailable) {
    widgetElement.style.display = 'none';
    return;
  }
  widgetElement.href = url;
  const isRatingVisible = widgetElement.dataset.isRatingVisible === 'true';
  if (!isRatingVisible) {
    return;
  }
  showRatingInfo(rating);
}
updateWidget();
