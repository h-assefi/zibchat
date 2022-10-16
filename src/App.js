import "./App.css";
import * as React from "react";
import ZButton from "./base/coreServices/components/button/ZButton";
import ZIconButton from "./base/coreServices/components/button/ZIconButton";
import ZIcon, { ZIcons } from "./base/coreServices/components/icon/ZIcon";
import ZLoadingButton from "./base/coreServices/components/button/ZLoadingButton";
import ZDialog from "./base/coreServices/components/dialog/ZDialog";
import ZAlertDialog from "./base/coreServices/components/dialog/ZAlertDialog";

function App() {
  const [o, setO] = React.useState(false);
  return (
    <div className="App">
      <ZButton onClick={() => setO(true)}>Disable elevation</ZButton>
      <ZIconButton>
        <ZIcon icon={ZIcons.fingerPrint} />
      </ZIconButton>
      <ZIconButton>
        <ZIcon />
      </ZIconButton>
      <ZLoadingButton loading>SOME TEXT</ZLoadingButton>
      <ZDialog
        open={o}
        title={"SOME TEXTS"}
        onClose={() => setO(false)}
        closeIcon
        dividers
      >
        i have nothing to say
      </ZDialog>
      {/* <ZAlertDialog
        message="some text message"
        open={o}
        onClose={() => setO(false)}
        actions={[
          { title: "Button 1", onClick: () => setO(false) },
          { title: "Button 2", onClick: () => setO(false) },
          { title: "Button 3", onClick: () => setO(false) },
        ]}
      ></ZAlertDialog> */}
    </div>
  );
}

export default App;
