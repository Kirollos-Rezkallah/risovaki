function Downloads() {
  return (
    <section id="downloads" className="downloads">
      <div class="files-row">
        {/* Block 1  */}
        <div class="file-block">
          <h3>PDF-файлы с пошаговыми инструкциями и настройками</h3>
          <a className="text-button" href="#">
            Скачать инструкции
          </a>
        </div>

        {/* Block 2  */}
        <div class="file-block">
          <h3>STL и GCODE файлы, готовые к печати</h3>
          <a className="text-button" href="#">
            Скачать 3D модели
          </a>
        </div>
      </div>

      {/* Block 3 */}
      <div class="upload-callout">
        <p>Хотите поделиться своей моделью? Отправьте её через форму ниже.</p>
        <a className="text-button" href="#">
          Открыть форму
        </a>
      </div>
    </section>
  );
}

export default Downloads;
