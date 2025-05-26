function Downloads() {
  return (
    <section id="downloads" className="downloads">
      <div className="files-row">
        {/* Block 1  */}
        <div className="file-block">
          <h3>PDF-файлы с пошаговыми инструкциями и настройками</h3>
          <a
            className="text-button"
            download
            href="/Инструкция-Рисоваки-Pro.pdf">
            Скачать инструкции Рисоваки-Pro
          </a>
          <a className="text-button" download href="/Инструкция-Рисоваки.pdf">
            Скачать инструкции Рисоваки
          </a>
        </div>

        {/* Block 2  */}
        <div className="file-block">
          <h3>STL и GCODE файлы, готовые к печати</h3>
          <a
            className="text-button"
            href="https://disk.yandex.ru/d/CAPL_f-ObKlTYA">
            Скачать 3D модели
          </a>
        </div>
      </div>

      {/* Block 3 */}
      <div className="upload-callout">
        <p>Хотите поделиться своей моделью? Отправьте её через форму ниже.</p>
        <a
          className="text-button"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeo8oSR5GUGJ4tUEoX-QFbAK1PFCcIUR29j_k_bVi6hBRDb5Q/viewform?usp=preview">
          Открыть форму
        </a>
      </div>
    </section>
  );
}

export default Downloads;
