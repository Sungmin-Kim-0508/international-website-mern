import React from "react";
import { Quill } from "react-quill";

const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);

export const quillModules = {
  toolbar: {
    container: "#toolbar"
  }
};

/**
 * How to make custom toolbar
 * https://codesandbox.io/s/6x93pk4rp3
 */

export function CustomToolBar(): React.ReactElement {
  return (
    <div id="toolbar">
      <select className="ql-font" defaultValue="Georgia">
        <option value="georgia">Georgia</option>
        <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
      </select>
      <select className="ql-size" defaultValue="Medium">
        <option value="small">Extra Small</option>
        <option value="extra-small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <span className="ql-formats">
        <button type="button" className="ql-bold" />
        <button type="button" className="ql-italic" />
        <button type="button" className="ql-underline" />
      </span>
      <span className="ql-formats">
        <select className="ql-align" />
        <button className="ql-clean" />
      </span>
      <span className="ql-formats">
        <select className="ql-color" />
        <select className="ql-background" />
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered" type="button" />
        <button className="ql-list" value="bullet" type="button" />
        <button className="ql-align" type="button" />
      </span>
      <span className="ql-formats">
        <button className="ql-link" type="button" />
        <button className="ql-image" type="button" />
      </span>
    </div>
  );
}
