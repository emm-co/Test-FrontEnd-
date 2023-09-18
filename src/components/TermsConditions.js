import { useSelector } from "react-redux";

function TermsConditions() {
  const content = useSelector((state) => state.ui.content);

  return (
    <div className="sm:mt-16 bg-graySecondary sm:grid sm:grid-cols-5">
      <p
        className="px-3 py-5 sm:pl-28 sm:py-10 sm:col-span-3 text-sm"
        dangerouslySetInnerHTML={{ __html: content.legals }}
      ></p>
    </div>
  );
}

export default TermsConditions;
