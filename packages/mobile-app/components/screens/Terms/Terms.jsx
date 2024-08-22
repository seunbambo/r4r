import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import PageContainer from "../../atoms/PageContainer";
import { StyledText } from "../../atoms";
import { TermsContainer } from "./Terms.styles";
import { useAmplitude } from "../../../hooks/useAmplitude";

const getTermsContent = async () => {
  return {
    terms: [
      {
        heading: "Terms of Service & Privacy Statement",
        body: 'This Terms of Use Agreement and our Privacy Statement (together, these "Terms") describe the terms and conditions on which Racing for Recovery offers you access to the website at racingforrecovery.org (the ‘website’) or our iOS and Android applications (the ‘apps’) to which these Terms are linked or referenced (collectively, the "Services"). Before accessing and using the Services, please read these Terms carefully because they constitute a legal agreement between Racing for Recovery and you. BY ACCESSING AND USING THE SERVICES, YOU AFFIRM THAT YOU HAVE READ AND UNDERSTAND THESE TERMS; YOU WILL COMPLY WITH THE TERMS; AND YOU ARE AT LEAST THE AGE OF LEGAL MAJORITY IN YOUR PLACE OF RESIDENCE AND OTHERWISE LEGALLY COMPETENT TO ENTER INTO CONTRACTS. If you do not agree to any of these Terms, please do not use the Services.',
      },
      {
        heading: "Changes",
        body: "We reserve the right to modify these terms at any time. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes, we will notify you here that it has been updated. Your continued use of the Services after the Effective Date constitutes your acceptance of the amended Terms. The amended Terms supersede all previous versions of our agreements, notices, or statements about the Terms.",
      },
      {
        heading: "Not a Medical Device",
        body: "The Services, including all treatment or medical-related information, is for informational purposes only. Racing for Recovery does not warrant or guarantee any treatment, therapy, medication, device, diagnosis, action, recommendation, or strategy of any author or other person available through the Services. We also cannot answer any treatment or medical-related questions either through the apps or via email or any other means. RACING FOR RECOVERY SERVICES ARE FOR INFORMATIONAL PURPOSES ONLY AND ARE NOT INTENDED AS A SUBSTITUTE FOR, NOR DOES IT REPLACE, PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS OR TREATMENT. DO NOT DISREGARD, AVOID OR DELAY OBTAINING MEDICAL ADVICE FROM A QUALIFIED HEALTHCARE PROVIDER BECAUSE OF SOMETHING YOU MAY HAVE READ THROUGH THE SERVICES. DO NOT USE THE SERVICES FOR EMERGENCY MEDICAL NEEDS. IF YOU EXPERIENCE A MEDICAL EMERGENCY, IMMEDIATELY CALL A HEALTH CARE PROFESSIONAL AND 911.",
      },
      {
        heading: "Accuracy of Materials",
        body: "The materials appearing on the Services could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website or apps are accurate, complete, or current. We may make changes to the materials contained on the Services at any time without notice. However, we do not make any commitment to update the materials.",
      },
      {
        heading: "External Links",
        body: 'The Services may contain links to third-party websites and services, including social media (collectively, "Linked Services"). Linked Services are not under the control of Racing for Recovery and Racing for Recovery is not responsible for Linked Services or for any information or materials on or any form of transmission received from any Linked Service. The inclusion of a link does not imply endorsement by Racing for Recovery of the Linked Service or any association with the operators of the Linked Service. Racing for Recovery does not investigate, verify or monitor the Linked Services. Racing for Recovery provides links to Linked Services for your convenience only. You access Linked Services at your own risk and subject to the privacy policies, terms and conditions of use and other legal provisions applicable to the Linked Services.',
      },
      {
        heading: "App Updates",
        body: 'Racing for Recovery may from time to time, in its sole discretion, develop and provide updates for Apps, which may include upgrades, bug fixes, patches and other error corrections and/or new features (collectively, "Updates"). Updates may also modify or delete in their entirety certain features and functionality. You agree that Racing for Recovery has no obligation to provide any Updates or to continue to provide or enable any particular features or functionality. Based on your mobile device settings, when your mobile device is connected to the Internet, then either: (a) the Updates will automatically download and install; or (b) you may receive notice of or be prompted to download and install available Updates. Please promptly download and install all Updates. If you do not, portions of the Services may not properly operate. You further agree that all Updates will be deemed part of the Services and subject to all terms and conditions of these Terms.',
      },
      {
        heading: "Use Of the Services",
        body: "Eligibility: You must be the age of legal majority or older in your place of residence to use the Services. By using the Services, you represent to Racing for Recovery that you are at least the age of majority in your place of residence. Your Responsibilities: You may use the Services for lawful purposes only. You may not use the Services in any manner that could damage, disable, overburden, or impair Racing for Recovery’s servers or networks or interfere with any other party's use and enjoyment of the Services. You may not attempt to gain unauthorized access to the Services, other users' Accounts or Racing for Recovery’s computer systems or networks through hacking, password mining or any other means. Without limiting any of the foregoing, you agree that you shall not and you agree not to encourage or allow any third party to: \n•	copy, modify, adapt, translate, reverse engineer, decode or otherwise attempt to derive or gain access to any portion of the Services or Racing for Recovery Content; \n•	use any robot, spider, site search/retrieval application or other automated device, process or means to access, retrieve, scrape or index any portion of the Services; \n•	rent, lease, lend, sell, sublicense, assign, distribute, publish, transfer or otherwise make available the Services (or any features or functionality of the Services) to any third party for any reason; \n•	reformat or frame any portion of the web pages that are part of the Services; or \n•	create more than one Account by automated means or under false or fraudulent pretenses. You are solely responsible for any and all charges, fees and other costs related to use of the Services. If you access and use the Services on your smartphone, tablet, or other mobile device, you must have wireless service through Wi-Fi or a participating mobile service provider.",
      },
      {
        heading: "No Warranties",
        body: 'Racing for Recovery warrants that Racing for Recovery has validly entered into these Terms and has the legal power to do so. You warrant that you have validly entered into these Terms and have the legal power to do so. EXCEPT AS EXPRESSLY PROVIDED ABOVE, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS OR IMPLIED. Racing for Recovery specifically disclaims all warranties and conditions of any kind, including any implied warranty of merchantability, fitness for a particular purpose, title, non-infringement, freedom from defects, uninterrupted use and all warranties implied from any course of dealing or usage of trade. Racing for Recovery makes no warranty as to the accuracy, completeness, currency, or reliability of any of the Services. Racing for Recovery does not warrant that (i) the Services will meet your requirements, (ii) operation of the Services will be uninterrupted or virus- or error-free or (iii) errors will be corrected. Any oral or written advice provided by Racing for Recovery, or its agents does not and will not create any warranty. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES WHICH MEANS THAT SOME OR ALL OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.',
      },
      {
        heading: "Limitation of Liability",
        body: 'YOUR USE OF THE SERVICES IS AT YOUR OWN RISK. RACING FOR RECOVERY SPECIFICALLY DISCLAIMS ANY LIABILITY, WHETHER BASED IN CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL OR SPECIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH ACCESS TO OR USE OF THE SERVICES, EVEN IF RACING FOR RECOVERY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, INCLUDING BUT NOT LIMITED TO RELIANCE BY ANY PARTY ON ANY CONTENT OBTAINED THROUGH THE USE OF THE SERVICES OR THAT ARISES IN CONNECTION WITH MISTAKES OR OMISSIONS IN, OR DELAYS IN TRANSMISSION OF, INFORMATION TO OR FROM THE USER, INTERRUPTIONS IN TELECOMMUNICATIONS CONNECTIONS TO THE SERVICES OR VIRUSES, WHETHER CAUSED IN WHOLE OR IN PART BY NEGLIGENCE, ACTS OF GOD, WAR, TERRORISM, TELECOMMUNICATIONS FAILURE, THEFT OR DESTRUCTION OF, OR UNAUTHORIZED ACCESS TO THE SERVICES. IF FOR ANY REASON THE DISCLAIMERS OF WARRANTIES OR LIMITATIONS OF LIABILITY SET FORTH IN THIS SECTION IS/ARE INAPPLICABLE OR UNENFORCEABLE FOR ANY REASON, THEN RACING FOR RECOVERY’S MAXIMUM LIABILITY FOR ANY TYPE OF DAMAGES HEREUNDER SHALL BE LIMITED TO THE LESSER OF THE TOTAL FEES PAID BY YOU TO RACING FOR RECOVERY DURING THE SIX (6) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY AND $1,000. The foregoing disclaimer of liability will not apply to the extent prohibited by applicable law. You acknowledge and agree that the above limitations of liability, together with the other provisions in these Terms that limit liability, are essential terms and that Racing for Recovery would not be willing to grant you the rights set forth in these Terms but for your agreement to the above limitations of liability. IF YOU ARE A CALIFORNIA RESIDENT, YOU WAIVE YOUR RIGHTS WITH RESPECT TO CALIFORNIA CIVIL CODE SECTION 1542, WHICH SAYS "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH, IF KNOWN BY HIM MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR."',
      },
      {
        heading: "Indemnification",
        body: "You agree to defend, indemnify, and hold harmless Racing for Recovery and affiliates and their respective officers, directors, employees, agents and licensees from any and all liability including costs, expenses, the costs of enforcing any right to indemnification hereunder and any insurance provider and attorneys' fees brought against Racing for Recovery by any third party arising out of or are related to your violation of these Terms or use of the Services. Racing for Recovery reserves the right, at its own expense, to assume the exclusive defense and control of any matter subject to indemnification hereunder. No settlement that affects the rights or obligations of Racing for Recovery may be made without Racing for Recovery’s prior written approval. Racing for Recovery agrees to indemnify you for any direct damages that you suffer arising out of or related to any suit, action of proceeding by a third party to the extent such direct damages arise from a claim that your use of the Services in compliance with these Terms infringes a third party's U.S. patent, copyright, or trademark right.",
      },
      {
        heading: "Electronic Contracting",
        body: "The Services are based in the State of Ohio in the United States. You acknowledge that you may not be able to access the Services outside of the United States and that access thereto may not be legal by certain persons or in certain countries. If you access the Services from outside the United States, you are responsible for compliance with local laws. Please note: By agreeing to these Terms, you explicitly agree that any claims or actions that you may otherwise have against Racing for Recovery under the laws of any jurisdiction outside the United States are hereby waived and that your sole location and applicable law for any dispute is in the United States according to the terms of Section 13.",
      },
      {
        heading: "Apple, Inc.",
        body: "This provision only applies in respect of the version of the Racing for Recovery App (“App”) used on devices of Apple, Inc. This Agreement is an agreement between you and Racing for Recovery. Apple has no responsibility for the App or the content of the App, including in respect of claims of intellectual property infringement, product liability or that the App does not conform with applicable law. To the maximum extent permitted by applicable law, Apple provides no warranty in respect of the App and has no obligation to provide support in respect of the App. All claims in respect of the App must be directed to us and not to Apple. Your use of the App must be in compliance with the App Store Terms of Service, and you may only use the App on an iPhone or iPod that you own or control as permitted by such terms. In the event the App fails to conform to the warranty set forth herein, you may notify Apple, and Apple will refund the purchase price for the App to you. Apple shall be a third-party beneficiary of this Agreement with the right to enforce this Agreement against you.",
      },
      {
        heading: "Governing Law",
        body: "This Agreement shall be governed in all respects under the laws of the State of Ohio, exclusive of its choice of law or conflict of law’s provisions. In any claim or action by you directly or indirectly arising under this Agreement or related to the Application, you irrevocably agree to submit to the exclusive jurisdiction of the courts located in Lucas County, Ohio. You waive any jurisdictional, venue or inconvenient forum objections to any of these courts that may have jurisdiction.",
      },
      {
        heading: "Data Privacy and Protection",
        body: "Please make sure that you carefully read our Privacy Statement to learn about the information that Racing for Recovery collects through the Services and how we process it. Without limiting the terms of Racing for Recovery's Privacy Statement, you understand that Racing for Recovery does not and cannot guarantee that your use of the Services and/or the information provided by you through the Services will be private or secure. Except as expressly required by law, Racing for Recovery is not responsible or liable to you for any lack of privacy or security you may experience. You are responsible for using the precautions and security measures best suited for your situation and intended use of the Services. Racing for Recovery reserves the right at all times to disclose any information as Racing for Recovery deems necessary to satisfy any applicable law, regulation, legal process or governmental request or protect the security of Personal Information and the Services.",
      },
    ],
  };
};

export const Terms = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [content, setContent] = useState(undefined);
  useAmplitude(Terms.displayName);

  useEffect(() => {
    const loadContent = async () => {
      const localContent = await getTermsContent();
      setContent(localContent);
      setIsLoadingContent(false);
    };

    loadContent();
  }, []);

  if (isLoadingContent) {
    return <ActivityIndicator />;
  }

  return (
    <PageContainer>
      {content.terms.map((term, i) => {
        return (
          <TermsContainer key={i}>
            <StyledText fontWeight="bold" opacity="default">
              {term.heading}
            </StyledText>
            <StyledText>{term.body}</StyledText>
          </TermsContainer>
        );
      })}
    </PageContainer>
  );
};

Terms.displayName = "Terms";
