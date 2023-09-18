import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userActions } from "../../store/slices/management";

export default function confirmationPage({ ui }) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.ui.language);

  useEffect(() => {
    dispatch(userActions.setUiContent(ui[language]));

    return () => {};
  }, [language]);

  return (
    <>
      <div className="bg-neutral-200 h-[50vh] text-center py-[15rem]">
        {language === "en" ? (
          <p className="text-5xl">confirmed reservation!</p>
        ) : (
          <p className="text-5xl">¡Reserva confirmada!</p>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const data = await fetch(
      `https://raw.githubusercontent.com/javialcocer/test-json/main/data.json`
    );
    const json = await data.json();
    return {
      props: { ui: json },
    };
  } catch (error) {
    return {
      props: { ui: "error" },
    };
  }
}
