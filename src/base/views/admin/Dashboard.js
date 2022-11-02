import * as React from "react";
import { ZFormGroup } from "src/base/coreServices/components/container/ZFormGroup";
import ZView from "src/base/coreServices/components/view/ZView";
import { VerifyMobile } from "./profile/VerifyMobile";
import { motion } from "framer-motion";
import { ZAnimation } from "src/base/coreServices/components/animation/ZAnimation";
import { VerifyEmail } from "./profile/VerifyEmail";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";

const Dashboard = () => {
  const [mobileVerified, setMobileVerified] = React.useState(false);
  const [emailVerified, setEmailVerified] = React.useState(false);

  const onMobileVerified = (state) => {
    if (state) setMobileVerified(state);
  };

  const onEmailVerified = (state) => {
    if (state) setEmailVerified(state);
  };

  return (
    <div>
      <div className="container">
        <ZFormGroup>
          <div className="justify-content-around align-items-center">
            <ZView className={"row justify-content-center"}>
              <ZView className={"row align-items-center justify-content-start"}>
                <motion.div
                  animate={!mobileVerified ? "open" : "closed"}
                  variants={ZAnimation.variants}
                  style={{ width: 250, marginLeft: 10 }}
                >
                  <VerifyMobile onVerified={onMobileVerified} />
                </motion.div>

                <motion.div
                  animate={!emailVerified ? "open" : "closed"}
                  variants={ZAnimation.variants}
                  style={{ width: 250 }}
                >
                  <VerifyEmail onVerified={onEmailVerified} />
                </motion.div>
              </ZView>
            </ZView>
          </div>
        </ZFormGroup>
      </div>
    </div>
  );
};

export default Dashboard;
