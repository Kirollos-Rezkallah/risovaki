import ButtonTarget from "./ButtonTarget";

export default function MarketplaceButtons({
  ozonHref,
  wildberriesHref,
  yandexHref,
}) {
  return (
    <div className="buttons">
      <ButtonTarget href={ozonHref} bgColor={"var(--color-ozon)"}>
        ozon
      </ButtonTarget>
      <ButtonTarget href={wildberriesHref} bgColor={"var(--color-wildberries)"}>
        wildberries
      </ButtonTarget>
      <ButtonTarget href={yandexHref} bgColor={"var(--color-yandex)"}>
        яндекс маркет
      </ButtonTarget>
    </div>
  );
}
