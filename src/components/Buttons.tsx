import { Button } from "cardo-ui";
import { FaBeer } from "react-icons/fa";

const Buttons = () => {
  return (
    <section className="buttons">
      <h2 className="title">Buttons</h2>
      <article className="primary">
        <h3 className="subtitle">Primary</h3>
        <div className="content">
          <Button text="Button S" />
          <Button text="Button M" size="md" />
          <Button text="Button L" size="lg" />
        </div>
      </article>
      <article className="primary-icon">
        <h3 className="subtitle">Primary with icon</h3>
        <div className="content">
          <Button text="Icon left" size="md" IconLeft={<FaBeer />} />
          <Button text="Icon right" size="md" IconRight={<FaBeer />} />
        </div>
      </article>
      <article className="ghost">
        <h3 className="subtitle">Ghost</h3>
        <div className="content">
          <Button text="Button S" variant="ghost" />
          <Button text="Button M" size="md" variant="ghost" />
          <Button text="Button L" size="lg" variant="ghost" />
        </div>
      </article>
      <article className="ghost-icon">
        <h3 className="subtitle">Ghost with icon</h3>
        <div className="content">
          <Button
            text="Icon left"
            size="md"
            IconLeft={<FaBeer />}
            variant="ghost"
          />
          <Button
            text="Icon right"
            size="md"
            IconRight={<FaBeer />}
            variant="ghost"
          />
        </div>
      </article>
    </section>
  );
};
export default Buttons;
