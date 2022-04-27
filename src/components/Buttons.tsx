import { Button } from "cardo-ui";
import { FaBeer } from "react-icons/fa";

const Buttons = () => {
  return (
    <section className="buttons">
      <h2 className="title">Buttons</h2>
      <article className="primary">
        <h3 className="subtitle">Primary</h3>
        <div className="content">
          <Button text="Button S" onClick={() => alert("This is a Button")} />
          <Button
            text="Button M"
            size="md"
            onClick={() => alert("This is a Button")}
          />
          <Button
            text="Button L"
            size="lg"
            onClick={() => alert("This is a Button")}
          />
        </div>
      </article>
      <article className="primary-icon">
        <h3 className="subtitle">Primary with icon</h3>
        <div className="content">
          <Button
            text="Icon left"
            size="md"
            IconLeft={<FaBeer />}
            onClick={() => alert("This is a Button")}
          />
          <Button
            text="Icon right"
            size="md"
            IconRight={<FaBeer />}
            onClick={() => alert("This is a Button")}
          />
        </div>
      </article>
      <article className="ghost">
        <h3 className="subtitle">Ghost</h3>
        <div className="content">
          <Button
            text="Button S"
            variant="ghost"
            onClick={() => alert("This is a Button")}
          />
          <Button
            text="Button M"
            size="md"
            variant="ghost"
            onClick={() => alert("This is a Button")}
          />
          <Button
            text="Button L"
            size="lg"
            variant="ghost"
            onClick={() => alert("This is a Button")}
          />
        </div>
      </article>
      <article className="ghost-icon">
        <h3 className="subtitle">Ghost with icon</h3>
        <div className="content">
          <Button
            text="Icon left"
            onClick={() => alert("This is a Button")}
            size="md"
            IconLeft={<FaBeer />}
            variant="ghost"
          />
          <Button
            text="Icon right"
            onClick={() => alert("This is a Button")}
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
