import React, { PureComponent } from 'react';
import { CPlanningCalculator } from './components/CPlanningCalculator';

export class MasterPlanningCalculator extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(242, 242, 242, 1)"}}>
      <CPlanningCalculator {...this.props} nodeId="15:51" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "15:51") return CPlanningCalculator15D51;
  return null;
}

class CPlanningCalculator15D51 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="15:52"
            style={{"marginLeft":0,"width":291,"minWidth":291,"height":null,"marginTop":0,"marginBottom":0,"minHeight":1024,"backgroundColor":"rgba(99, 93, 223, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="15:53"
            style={{"marginLeft":340,"width":374,"minWidth":374,"height":null,"marginTop":-976,"marginBottom":932,"minHeight":44,"color":"rgba(0, 0, 0, 1)","fontSize":36,"fontWeight":700,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Planning Calculator</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="15:59"
            style={{"marginLeft":-74,"width":338,"minWidth":338,"height":null,"marginTop":-932,"marginBottom":865,"minHeight":67,"backgroundColor":"rgba(99, 93, 223, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="15:60"
            style={{"marginLeft":113,"width":57,"minWidth":57,"height":null,"marginTop":-909,"marginBottom":887,"minHeight":22,"color":"rgba(255, 255, 255, 1)","fontSize":18,"fontWeight":700,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Home</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":49}} className="outerDiv">
          <div
            id="15:108"
            style={{"marginLeft":805,"width":586,"minWidth":586,"height":null,"marginTop":-893,"marginBottom":-13,"minHeight":906,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 12px 30px rgba(0, 0, 0, 0.11999999731779099)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":134}} className="outerDiv">
          <div
            id="15:216"
            style={{"marginLeft":340,"width":433,"minWidth":433,"height":null,"marginTop":-893,"marginBottom":549,"minHeight":344}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="493" height="404" viewBox="0 0 493 404" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_15:216)">
<rect x="30" y="18" width="433" height="344" rx="16" fill="url(#paint0_linear_15:216)"/>
<rect x="30" y="18" width="433" height="344" rx="16" fill="#8F8AF8"/>
</g>
<defs>
<filter id="filter0_d_15:216" x="0" y="0" width="493" height="404" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="12"/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15:216"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15:216" result="shape"/>
</filter>
<linearGradient id="paint0_linear_15:216" x1="463" y1="18" x2="170.577" y2="417.552" gradientUnits="userSpaceOnUse">
<stop offset="0.0529957" stop-color="#FEA886"/>
<stop offset="1" stop-color="#8F8AF8"/>
</linearGradient>
</defs>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":135}} className="outerDiv">
          <div
            id="15:218"
            style={{"marginLeft":675,"width":55,"minWidth":55,"height":null,"marginTop":-860,"marginBottom":805,"minHeight":55,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/fc8c/8310/796fc8eeb0eec56e7bb60a0ae649d969)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":136}} className="outerDiv">
          <div
            id="15:219"
            style={{"marginLeft":381,"width":180,"minWidth":180,"height":null,"marginTop":-860,"marginBottom":829,"minHeight":31,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":700,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="7">{this.props.company}</span>
              <br key="br7" />
            </div>
          </div>
        </div>
        <div style={{"zIndex":50}} className="outerDiv">
          <div
            id="15:110"
            style={{"marginLeft":845,"width":235,"minWidth":235,"height":null,"marginTop":-858,"marginBottom":829,"minHeight":29,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":700,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Spending + Saving</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="15:55"
            style={{"marginLeft":-51,"width":315,"minWidth":315,"height":null,"marginTop":-855,"marginBottom":788,"minHeight":67,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="15:56"
            style={{"marginLeft":115,"width":97,"minWidth":97,"height":null,"marginTop":-832,"marginBottom":810,"minHeight":22,"color":"rgba(99, 93, 223, 1)","fontSize":18,"fontWeight":700,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Calculator</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":139}} className="outerDiv">
          <div
            id="15:221"
            style={{"marginLeft":380,"width":286,"minWidth":286,"height":null,"marginTop":-816,"marginBottom":738,"minHeight":78,"color":"rgba(255, 255, 255, 1)","fontSize":64,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.avgSalary}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":63}} className="outerDiv">
          <div
            id="15:134"
            style={{"marginLeft":1140,"width":77,"minWidth":77,"height":null,"marginTop":-789,"marginBottom":767,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Monthly </span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":64}} className="outerDiv">
          <div
            id="15:135"
            style={{"marginLeft":1234,"width":67,"minWidth":67,"height":null,"marginTop":-789,"marginBottom":767,"minHeight":22,"color":"rgba(193, 193, 193, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Annual</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":10}} className="outerDiv">
          <div
            id="15:63"
            style={{"marginLeft":-58,"width":322,"minWidth":322,"height":null,"marginTop":-778,"marginBottom":711,"minHeight":67,"backgroundColor":"rgba(99, 93, 223, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":11}} className="outerDiv">
          <div
            id="15:64"
            style={{"marginLeft":115,"width":57,"minWidth":57,"height":null,"marginTop":-755,"marginBottom":733,"minHeight":22,"color":"rgba(255, 255, 255, 1)","fontSize":18,"fontWeight":700,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Saved </span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":65}} className="outerDiv">
          <div
            id="15:136"
            style={{"marginLeft":1160,"width":108,"minWidth":108,"height":null,"marginTop":-741,"marginBottom":724,"minHeight":17,"color":"rgba(99, 93, 223, 1)","fontSize":14,"fontWeight":500,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Total Spending</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":66}} className="outerDiv">
          <div
            id="15:137"
            style={{"marginLeft":1140,"width":11,"minWidth":11,"height":null,"marginTop":-738,"marginBottom":727,"minHeight":11}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.5" r="5.5" fill="#635DDF"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":62}} className="outerDiv">
          <div
            id="15:133"
            style={{"marginLeft":1140,"width":78,"minWidth":78,"height":null,"marginTop":-718,"marginBottom":696,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.avgSalary * .45}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":137}} className="outerDiv">
          <div
            id="20:50"
            style={{"marginLeft":380,"width":257,"minWidth":257,"height":null,"marginTop":-718,"marginBottom":689,"minHeight":29,"color":"rgba(255, 255, 255, 1)","fontSize":24,"fontWeight":700,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Software Engineer II</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":14}} className="outerDiv">
          <div
            id="15:67"
            style={{"marginLeft":-58,"width":322,"minWidth":322,"height":null,"marginTop":-701,"marginBottom":634,"minHeight":67,"backgroundColor":"rgba(99, 93, 223, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":15}} className="outerDiv">
          <div
            id="15:68"
            style={{"marginLeft":115,"width":112,"minWidth":112,"height":null,"marginTop":-678,"marginBottom":656,"minHeight":22,"color":"rgba(255, 255, 255, 1)","fontSize":18,"fontWeight":700,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Your Profile</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":69}} className="outerDiv">
          <div
            id="15:140"
            style={{"marginLeft":1160,"width":94,"minWidth":94,"height":null,"marginTop":-671,"marginBottom":654,"minHeight":17,"color":"rgba(99, 93, 223, 1)","fontSize":14,"fontWeight":500,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Total Savings</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":70}} className="outerDiv">
          <div
            id="15:141"
            style={{"marginLeft":1140,"width":11,"minWidth":11,"height":null,"marginTop":-668,"marginBottom":657,"minHeight":11}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.5" r="5.5" fill="#D26236"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":145}} className="outerDiv">
          <div
            id="20:51"
            style={{"marginLeft":454,"width":100,"minWidth":100,"height":null,"marginTop":-651,"marginBottom":551,"minHeight":100}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":68}} className="outerDiv">
          <div
            id="15:139"
            style={{"marginLeft":1140,"width":78,"minWidth":78,"height":null,"marginTop":-648,"marginBottom":626,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.avgSalary * .40}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":138}} className="outerDiv">
          <div
            id="15:220"
            style={{"marginLeft":380,"width":176,"minWidth":176,"height":null,"marginTop":-631,"marginBottom":609,"minHeight":22,"color":"rgba(255, 255, 255, 1)","fontSize":18,"fontWeight":700,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">{this.props.state}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":73}} className="outerDiv">
          <div
            id="15:144"
            style={{"marginLeft":1160,"width":65,"minWidth":65,"height":null,"marginTop":-601,"marginBottom":584,"minHeight":17,"color":"rgba(99, 93, 223, 1)","fontSize":14,"fontWeight":500,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Leftovers</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":74}} className="outerDiv">
          <div
            id="15:145"
            style={{"marginLeft":1140,"width":11,"minWidth":11,"height":null,"marginTop":-598,"marginBottom":587,"minHeight":11}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.5" r="5.5" fill="#83DDD4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":72}} className="outerDiv">
          <div
            id="15:143"
            style={{"marginLeft":1140,"width":78,"minWidth":78,"height":null,"marginTop":-578,"marginBottom":556,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.avgSalary * .15}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":18}} className="outerDiv">
          <div
            id="15:72"
            style={{"marginLeft":340,"width":433,"minWidth":433,"height":null,"marginTop":-517,"marginBottom":-13,"minHeight":530,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 12px 30px rgba(0, 0, 0, 0.11999999731779099)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":78}} className="outerDiv">
          <div
            id="15:148"
            style={{"marginLeft":845,"width":77,"minWidth":77,"height":null,"marginTop":-492,"marginBottom":470,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Monthly </span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":116}} className="outerDiv">
          <div
            id="15:214"
            style={{"marginLeft":939,"width":67,"minWidth":67,"height":null,"marginTop":-492,"marginBottom":470,"minHeight":22,"color":"rgba(193, 193, 193, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Annual</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":19}} className="outerDiv">
          <div
            id="15:74"
            style={{"marginLeft":380,"width":281,"minWidth":281,"height":null,"marginTop":-482,"marginBottom":453,"minHeight":29,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":700,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Net Salary Breakdown</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":22}} className="outerDiv">
          <div
            id="15:78"
            style={{"marginLeft":402,"width":143,"minWidth":143,"height":null,"marginTop":-436,"marginBottom":419,"minHeight":17,"color":"rgba(99, 93, 223, 1)","fontSize":14,"fontWeight":500,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Total Compensation</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":80}} className="outerDiv">
          <div
            id="15:154"
            style={{"marginLeft":845,"width":50,"minWidth":50,"height":null,"marginTop":-433,"marginBottom":383,"minHeight":50,"border":"2px solid rgba(143, 138, 248, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":79}} className="outerDiv">
          <div
            id="15:151"
            style={{"marginLeft":918,"width":88,"minWidth":88,"height":null,"marginTop":-419,"marginBottom":397,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Groceries</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":110}} className="outerDiv">
          <div
            id="15:205"
            style={{"marginLeft":1275,"width":45,"minWidth":45,"height":null,"marginTop":-419,"marginBottom":397,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"RIGHT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.avgSalary * .10}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":20}} className="outerDiv">
          <div
            id="15:76"
            style={{"marginLeft":402,"width":81,"minWidth":81,"height":null,"marginTop":-413,"marginBottom":391,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.avgSalary}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":21}} className="outerDiv">
          <div
            id="15:77"
            style={{"marginLeft":381,"width":11,"minWidth":11,"height":null,"marginTop":-413,"marginBottom":391,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">+</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":27}} className="outerDiv">
          <div
            id="15:83"
            style={{"marginLeft":402,"width":159,"minWidth":159,"height":null,"marginTop":-378,"marginBottom":361,"minHeight":17,"color":"rgba(99, 93, 223, 1)","fontSize":14,"fontWeight":500,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Income Taxes</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":86}} className="outerDiv">
          <div
            id="15:160"
            style={{"marginLeft":845,"width":50,"minWidth":50,"height":null,"marginTop":-368,"marginBottom":318,"minHeight":50,"border":"2px solid rgba(143, 138, 248, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":112}} className="outerDiv">
          <div
            id="15:207"
            style={{"marginLeft":1274,"width":46,"minWidth":46,"height":null,"marginTop":-356,"marginBottom":334,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"RIGHT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.avgSalary * .20}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":25}} className="outerDiv">
          <div
            id="15:81"
            style={{"marginLeft":402,"width":59,"minWidth":59,"height":null,"marginTop":-355,"marginBottom":333,"minHeight":22,"color":"rgba(210, 98, 54, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.AnnualFederalTax}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":26}} className="outerDiv">
          <div
            id="15:82"
            style={{"marginLeft":381,"width":7,"minWidth":7,"height":null,"marginTop":-355,"marginBottom":333,"minHeight":22,"color":"rgba(210, 98, 54, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">-</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":85}} className="outerDiv">
          <div
            id="15:157"
            style={{"marginLeft":918,"width":150,"minWidth":150,"height":null,"marginTop":-354,"marginBottom":332,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Home & Utilities</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":32}} className="outerDiv">
          <div
            id="15:88"
            style={{"marginLeft":402,"width":223,"minWidth":223,"height":null,"marginTop":-320,"marginBottom":303,"minHeight":17,"color":"rgba(99, 93, 223, 1)","fontSize":14,"fontWeight":500,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">FICA and State Insurance Taxes</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":92}} className="outerDiv">
          <div
            id="15:172"
            style={{"marginLeft":845,"width":50,"minWidth":50,"height":null,"marginTop":-307,"marginBottom":257,"minHeight":50,"border":"2px solid rgba(143, 138, 248, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":30}} className="outerDiv">
          <div
            id="15:86"
            style={{"marginLeft":402,"width":107,"minWidth":107,"height":null,"marginTop":-297,"marginBottom":275,"minHeight":22,"color":"rgba(210, 98, 54, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.AnnualFiscaTax + this.props.AnnualStateTax}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":31}} className="outerDiv">
          <div
            id="15:87"
            style={{"marginLeft":381,"width":7,"minWidth":7,"height":null,"marginTop":-297,"marginBottom":275,"minHeight":22,"color":"rgba(210, 98, 54, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">-</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":91}} className="outerDiv">
          <div
            id="15:169"
            style={{"marginLeft":918,"width":56,"minWidth":56,"height":null,"marginTop":-293,"marginBottom":271,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Travel</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":111}} className="outerDiv">
          <div
            id="15:206"
            style={{"marginLeft":1277,"width":48,"minWidth":48,"height":null,"marginTop":-293,"marginBottom":271,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"RIGHT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.avgSalary * .08}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":37}} className="outerDiv">
          <div
            id="15:93"
            style={{"marginLeft":401,"width":140,"minWidth":140,"height":null,"marginTop":-262,"marginBottom":245,"minHeight":17,"color":"rgba(99, 93, 223, 1)","fontSize":14,"fontWeight":500,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Pre-Tax Deductions</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":98}} className="outerDiv">
          <div
            id="15:178"
            style={{"marginLeft":845,"width":50,"minWidth":50,"height":null,"marginTop":-242,"marginBottom":192,"minHeight":50,"border":"2px solid rgba(143, 138, 248, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":35}} className="outerDiv">
          <div
            id="15:91"
            style={{"marginLeft":401,"width":107,"minWidth":107,"height":null,"marginTop":-239,"marginBottom":217,"minHeight":22,"color":"rgba(210, 98, 54, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">$XX,XXX.XX</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":36}} className="outerDiv">
          <div
            id="15:92"
            style={{"marginLeft":380,"width":7,"minWidth":7,"height":null,"marginTop":-239,"marginBottom":217,"minHeight":22,"color":"rgba(210, 98, 54, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">-</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":97}} className="outerDiv">
          <div
            id="15:175"
            style={{"marginLeft":918,"width":192,"minWidth":192,"height":null,"marginTop":-228,"marginBottom":206,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Restaurants / Dining</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":113}} className="outerDiv">
          <div
            id="15:208"
            style={{"marginLeft":1278,"width":46,"minWidth":46,"height":null,"marginTop":-228,"marginBottom":206,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"RIGHT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.avgSalary * 0.06}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":42}} className="outerDiv">
          <div
            id="15:98"
            style={{"marginLeft":402,"width":147,"minWidth":147,"height":null,"marginTop":-204,"marginBottom":187,"minHeight":17,"color":"rgba(99, 93, 223, 1)","fontSize":14,"fontWeight":500,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Post-Tax Deductions</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":40}} className="outerDiv">
          <div
            id="15:96"
            style={{"marginLeft":402,"width":107,"minWidth":107,"height":null,"marginTop":-181,"marginBottom":159,"minHeight":22,"color":"rgba(210, 98, 54, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">$XX,XXX.XX</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":41}} className="outerDiv">
          <div
            id="15:97"
            style={{"marginLeft":381,"width":7,"minWidth":7,"height":null,"marginTop":-181,"marginBottom":159,"minHeight":22,"color":"rgba(210, 98, 54, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">-</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":104}} className="outerDiv">
          <div
            id="15:184"
            style={{"marginLeft":845,"width":50,"minWidth":50,"height":null,"marginTop":-177,"marginBottom":127,"minHeight":50,"border":"2px solid rgba(143, 138, 248, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":103}} className="outerDiv">
          <div
            id="15:181"
            style={{"marginLeft":918,"width":63,"minWidth":63,"height":null,"marginTop":-163,"marginBottom":141,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Health</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":114}} className="outerDiv">
          <div
            id="15:209"
            style={{"marginLeft":1280,"width":41,"minWidth":41,"height":null,"marginTop":-163,"marginBottom":141,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"RIGHT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.avgSalary * 0.10}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":45}} className="outerDiv">
          <div
            id="15:106"
            style={{"marginLeft":368,"width":378.01190185546875,"minWidth":378.01190185546875,"marginTop":-138,"marginBottom":138,"height":null}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="379" height="2" viewBox="0 0 379 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="1" x2="378.012" y2="1" stroke="#CFCFCF" stroke-width="2"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":146}} className="outerDiv">
          <div
            id="21:53"
            style={{"marginLeft":368,"width":378,"minWidth":378,"height":null,"marginTop":-122,"marginBottom":43,"minHeight":79,"backgroundColor":"rgba(143, 138, 248, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":118}} className="outerDiv">
          <div
            id="15:196"
            style={{"marginLeft":845,"width":50,"minWidth":50,"height":null,"marginTop":-117,"marginBottom":67,"minHeight":50,"border":"2px solid rgba(143, 138, 248, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":148}} className="outerDiv">
          <div
            id="21:56"
            style={{"marginLeft":403,"width":128,"minWidth":128,"height":null,"marginTop":-105,"marginBottom":88,"minHeight":17,"color":"rgba(255, 255, 255, 1)","fontSize":14,"fontWeight":500,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Take Home Salary</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":117}} className="outerDiv">
          <div
            id="15:193"
            style={{"marginLeft":918,"width":244,"minWidth":244,"height":null,"marginTop":-103,"marginBottom":81,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Shopping / Entertainment</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":123}} className="outerDiv">
          <div
            id="15:212"
            style={{"marginLeft":1274,"width":46,"minWidth":46,"height":null,"marginTop":-99,"marginBottom":77,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"RIGHT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.avgSalary * 0.06}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":147}} className="outerDiv">
          <div
            id="21:55"
            style={{"marginLeft":403,"width":79,"minWidth":79,"height":null,"marginTop":-82,"marginBottom":60,"minHeight":22,"color":"rgba(255, 255, 255, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">$127,060</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":142}} className="outerDiv">
          <div
            id="15:224"
            style={{"marginLeft":115,"width":73,"minWidth":73,"height":null,"marginTop":-67,"marginBottom":45,"minHeight":22,"color":"rgba(255, 255, 255, 1)","fontSize":18,"fontWeight":700,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Log out</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":125}} className="outerDiv">
          <div
            id="15:202"
            style={{"marginLeft":844,"width":50,"minWidth":50,"height":null,"marginTop":-56,"marginBottom":6,"minHeight":50,"border":"2px solid rgba(143, 138, 248, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":124}} className="outerDiv">
          <div
            id="15:199"
            style={{"marginLeft":917,"width":72,"minWidth":72,"height":null,"marginTop":-42,"marginBottom":20,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Savings</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":130}} className="outerDiv">
          <div
            id="15:213"
            style={{"marginLeft":1273,"width":47,"minWidth":47,"height":null,"marginTop":-41,"marginBottom":19,"minHeight":22,"color":"rgba(0, 0, 0, 1)","fontSize":18,"fontWeight":600,"fontFamily":"Montserrat","textAlign":"RIGHT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">${this.props.avgSalary * 0.40}</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv centerer">
          <div
            id="15:57"
            style={{"width":"2.1527777777777777%","marginLeft":"3.8194444444444446%","height":"3.02734375%","top":"18.26171875%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.3963 20.5246C26.5745 22.4679 25.2893 24.1803 23.6528 25.5121C22.0164 26.8439 20.0787 27.7546 18.009 28.1645C15.9393 28.5744 13.8007 28.4711 11.7802 27.8636C9.75967 27.256 7.91873 26.1628 6.41832 24.6794C4.91791 23.1961 3.80372 21.3677 3.17315 19.3543C2.54259 17.3408 2.41485 15.2035 2.80111 13.1293C3.18736 11.0551 4.07585 9.10706 5.38889 7.45554C6.70194 5.80402 8.39956 4.49929 10.3333 3.65542" stroke="#635DDF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.4167 15.5C28.4167 13.8038 28.0826 12.1241 27.4334 10.557C26.7843 8.98989 25.8329 7.56596 24.6335 6.36654C23.434 5.16712 22.0101 4.21568 20.443 3.56656C18.8759 2.91744 17.1962 2.58334 15.5 2.58334V15.5H28.4167Z" stroke="#635DDF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv centerer">
          <div
            id="15:61"
            style={{"width":"2.1527777777777777%","marginLeft":"3.8194444444444446%","height":"3.02734375%","top":"10.7421875%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="31" height="31" fill="#635DDF"/>
<path d="M3.875 11.625L15.5 2.58333L27.125 11.625V25.8333C27.125 26.5185 26.8528 27.1756 26.3684 27.66C25.8839 28.1445 25.2268 28.4167 24.5417 28.4167H6.45833C5.77319 28.4167 5.11611 28.1445 4.63164 27.66C4.14717 27.1756 3.875 26.5185 3.875 25.8333V11.625Z" stroke="white" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.625 28.4167V15.5H19.375V28.4167" stroke="white" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":12}} className="outerDiv centerer">
          <div
            id="15:65"
            style={{"width":"2.1527777777777777%","marginLeft":"3.8194444444444446%","height":"3.02734375%","top":"25.78125%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.5417 27.125L15.5 20.6667L6.45833 27.125V6.45833C6.45833 5.77319 6.7305 5.11611 7.21497 4.63164C7.69944 4.14717 8.35652 3.875 9.04167 3.875H21.9583C22.6435 3.875 23.3006 4.14717 23.785 4.63164C24.2695 5.11611 24.5417 5.77319 24.5417 6.45833V27.125Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":16}} className="outerDiv centerer">
          <div
            id="15:69"
            style={{"width":"2.1527777777777777%","marginLeft":"3.8194444444444446%","height":"3.02734375%","top":"33.30078125%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.8333 27.125V24.5417C25.8333 23.1714 25.289 21.8572 24.32 20.8883C23.3511 19.9193 22.037 19.375 20.6667 19.375H10.3333C8.96305 19.375 7.64889 19.9193 6.67995 20.8883C5.71101 21.8572 5.16667 23.1714 5.16667 24.5417V27.125" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 14.2083C18.3535 14.2083 20.6667 11.8951 20.6667 9.04167C20.6667 6.1882 18.3535 3.875 15.5 3.875C12.6465 3.875 10.3333 6.1882 10.3333 9.04167C10.3333 11.8951 12.6465 14.2083 15.5 14.2083Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":23}} className="outerDiv centerer">
          <div
            id="15:79"
            style={{"width":"1.1805555555555556%","marginLeft":"38.05555555555556%","height":"1.66015625%","top":"57.51953125%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 6.375L8.5 10.625L12.75 6.375" stroke="#635DDF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":28}} className="outerDiv centerer">
          <div
            id="15:84"
            style={{"width":"1.1805555555555556%","marginLeft":"39.166666666666664%","height":"1.66015625%","top":"63.18359375%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 6.375L8.5 10.625L12.75 6.375" stroke="#635DDF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":33}} className="outerDiv centerer">
          <div
            id="15:89"
            style={{"width":"1.1805555555555556%","marginLeft":"43.611111111111114%","height":"1.66015625%","top":"68.84765625%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 6.375L8.5 10.625L12.75 6.375" stroke="#635DDF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":38}} className="outerDiv centerer">
          <div
            id="15:94"
            style={{"width":"1.1805555555555556%","marginLeft":"37.77777777777778%","height":"1.66015625%","top":"74.51171875%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 6.375L8.5 10.625L12.75 6.375" stroke="#635DDF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":43}} className="outerDiv centerer">
          <div
            id="15:99"
            style={{"width":"1.1805555555555556%","marginLeft":"38.333333333333336%","height":"1.66015625%","top":"80.17578125%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 6.375L8.5 10.625L12.75 6.375" stroke="#635DDF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":51}} className="outerDiv centerer">
          <div
            id="15:114"
            style={{"width":"6.069441901312934%","marginLeft":"69.7638914320204%","height":"8.754938840866089%","top":"26.35248340666294%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="89" height="91" viewBox="0 0 89 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M88.2451 90.4992C88.2451 73.694 84.8207 57.065 78.1808 41.6272C71.541 26.1893 61.825 12.2663 49.6259 0.707959L0.707957 52.3379C5.8926 57.2502 10.0219 63.1675 12.8438 69.7286C15.6657 76.2897 17.1211 83.357 17.1211 90.4992H88.2451Z" fill="#83DDD4" stroke="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":52}} className="outerDiv centerer">
          <div
            id="15:116"
            style={{"width":"4.88037109375%","marginLeft":"68.27527364095052%","height":"7.859455049037933%","top":"23.52711781859398%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="72" height="82" viewBox="0 0 72 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M71.064 29.6211C56.76 16.0685 39.4275 6.12634 20.5074 0.62124L0.62121 68.9665C8.66225 71.3062 16.0286 75.5316 22.1078 81.2915L71.064 29.6211Z" fill="#8F8AF8" stroke="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":53}} className="outerDiv centerer">
          <div
            id="15:118"
            style={{"width":"1.407271491156684%","marginLeft":"68.24574364556207%","height":"6.6866569221019745%","top":"23.499145358800888%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="22" height="70" viewBox="0 0 22 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.969 0.907218C20.6345 0.809892 20.2996 0.713978 19.9643 0.619474L0.619466 69.2553C0.76197 69.2955 0.904316 69.3363 1.04648 69.3776L20.969 0.907218Z" fill="#164965" stroke="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":54}} className="outerDiv centerer">
          <div
            id="15:120"
            style={{"width":"9.88517337375217%","marginLeft":"59.69835917154948%","height":"9.638585150241852%","top":"23.046875%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="144" height="100" viewBox="0 0 144 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M143.201 5.13755C116.096 -2.50186 87.1956 -0.660615 61.2795 10.3568C35.3633 21.3741 13.9841 40.9076 0.677781 65.7264L63.3406 99.3222C68.9957 88.7743 78.0819 80.4725 89.0963 75.7901C100.111 71.1078 112.393 70.3252 123.913 73.572L143.201 5.13755Z" fill="#635DDF" stroke="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":55}} className="outerDiv centerer">
          <div
            id="15:122"
            style={{"width":"5.15580071343316%","marginLeft":"58.888749016655815%","height":"4.576215893030167%","top":"29.408694803714752%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="76" height="49" viewBox="0 0 76 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3341 0.68124C7.01397 10.6042 3.06691 21.2041 0.601165 32.19L70.3323 47.8409C71.3802 43.1719 73.0577 38.667 75.3187 34.4497L12.3341 0.68124Z" fill="#CECECE" stroke="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":56}} className="outerDiv centerer">
          <div
            id="15:124"
            style={{"width":"4.932047526041667%","marginLeft":"58.768412272135414%","height":"1.9094407558441162%","top":"32.46615827083588%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="73" height="21" viewBox="0 0 73 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.32505 0.604106C1.61811 3.75377 1.03354 6.92966 0.572677 10.1246L71.6511 20.3775C71.847 19.0197 72.0955 17.6699 72.3959 16.3313L2.32505 0.604106Z" fill="black" stroke="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":57}} className="outerDiv centerer">
          <div
            id="15:126"
            style={{"width":"5.839339362250434%","marginLeft":"58.68055555555556%","height":"9.686680138111115%","top":"33.38556885719299%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="86" height="101" viewBox="0 0 86 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.77457 0.569285C-0.789805 18.3469 0.533568 36.4692 5.65332 53.6857C10.7731 70.9022 19.5673 86.803 31.4292 100.291L85.0382 53.1434C79.9969 47.4112 76.2593 40.6534 74.0834 33.3364C71.9075 26.0194 71.3451 18.3174 72.4349 10.7619L1.77457 0.569285Z" fill="#BFF3EE" stroke="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":58}} className="outerDiv centerer">
          <div
            id="15:128"
            style={{"width":"6.206834581163195%","marginLeft":"60.81682840983073%","height":"8.650779724121094%","top":"38.49245607852936%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="91" height="90" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.707037 47.6975C22.3812 72.3421 52.9576 87.3674 85.71 89.468L90.264 18.4595C76.3442 17.5668 63.3492 11.1811 54.1377 0.707067L0.707037 47.6975Z" fill="#E39D81" stroke="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":59}} className="outerDiv centerer">
          <div
            id="15:130"
            style={{"width":"9.125289916992188%","marginLeft":"66.70804341634114%","height":"12.060546875%","top":"35.10742038488388%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="133" height="125" viewBox="0 0 133 125" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.533138 124.244C17.4502 125.329 34.4101 122.933 50.365 117.206C66.3199 111.478 80.9309 102.54 93.2953 90.9427C105.66 79.3458 115.515 65.3369 122.252 49.7813C128.989 34.2257 132.465 17.4539 132.465 0.502008H61.1674C61.1674 7.70654 59.6901 14.8346 56.8268 21.4457C53.9635 28.0568 49.7751 34.0106 44.5202 38.9393C39.2653 43.868 33.0557 47.6668 26.2748 50.101C19.494 52.5353 12.2861 53.5534 5.09629 53.0923L0.533138 124.244Z" fill="#D26236" stroke="white"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":77}} className="outerDiv centerer">
          <div
            id="15:146"
            style={{"width":"1.6666666666666667%","marginLeft":"92.15277777777777%","height":"2.34375%","top":"16.2109375%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#D26236" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="#D26236" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":82}} className="outerDiv centerer">
          <div
            id="15:155"
            style={{"width":"1.5277777777777777%","marginLeft":"59.65277777777778%","height":"2.1484375%","top":"59.08203125%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.64657 21.0113C9.17186 21.0113 9.59769 20.5854 9.59769 20.0602C9.59769 19.5349 9.17186 19.109 8.64657 19.109C8.12127 19.109 7.69544 19.5349 7.69544 20.0602C7.69544 20.5854 8.12127 21.0113 8.64657 21.0113Z" stroke="#635DDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.109 21.0113C19.6343 21.0113 20.0601 20.5854 20.0601 20.0602C20.0601 19.5349 19.6343 19.109 19.109 19.109C18.5837 19.109 18.1579 19.5349 18.1579 20.0602C18.1579 20.5854 18.5837 21.0113 19.109 21.0113Z" stroke="#635DDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.03759 1.03759H4.8421L7.39112 13.7732C7.4781 14.2111 7.71632 14.6044 8.06409 14.8844C8.41185 15.1643 8.84701 15.3131 9.29337 15.3045H18.5383C18.9847 15.3131 19.4198 15.1643 19.7676 14.8844C20.1154 14.6044 20.3536 14.2111 20.4406 13.7732L21.9624 5.79323H5.79323" stroke="#635DDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":88}} className="outerDiv centerer">
          <div
            id="15:161"
            style={{"width":"1.5277777777777777%","marginLeft":"59.65277777777778%","height":"2.1484375%","top":"65.625%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.475 5.77499C13.307 5.94634 13.213 6.17672 13.213 6.41666C13.213 6.6566 13.307 6.88697 13.475 7.05833L14.9417 8.52499C15.113 8.69295 15.3434 8.78703 15.5833 8.78703C15.8233 8.78703 16.0536 8.69295 16.225 8.52499L19.6808 5.06916C20.1418 6.08775 20.2813 7.22262 20.0809 8.32254C19.8805 9.42246 19.3496 10.4352 18.5591 11.2257C17.7685 12.0163 16.7558 12.5472 15.6559 12.7476C14.556 12.948 13.4211 12.8084 12.4025 12.3475L6.06832 18.6817C5.70365 19.0463 5.20905 19.2512 4.69332 19.2512C4.1776 19.2512 3.683 19.0463 3.31832 18.6817C2.95365 18.317 2.74878 17.8224 2.74878 17.3067C2.74878 16.7909 2.95365 16.2963 3.31832 15.9317L9.65249 9.59749C9.19156 8.5789 9.052 7.44403 9.2524 6.34411C9.45281 5.24419 9.98367 4.23147 10.7742 3.4409C11.5648 2.65034 12.5775 2.11948 13.6774 1.91907C14.7774 1.71866 15.9122 1.85823 16.9308 2.31916L13.4842 5.76583L13.475 5.77499Z" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":94}} className="outerDiv centerer">
          <div
            id="15:173"
            style={{"width":"1.6666666666666667%","marginLeft":"59.583333333333336%","height":"2.34375%","top":"71.2890625%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":100}} className="outerDiv centerer">
          <div
            id="15:179"
            style={{"width":"1.5277777777777777%","marginLeft":"59.65277777777778%","height":"2.1484375%","top":"77.734375%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15:179)">
<path d="M16.5 7.33331H17.4167C18.3891 7.33331 19.3218 7.71962 20.0094 8.40725C20.697 9.09489 21.0833 10.0275 21.0833 11C21.0833 11.9724 20.697 12.9051 20.0094 13.5927C19.3218 14.2803 18.3891 14.6666 17.4167 14.6666H16.5" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.83331 7.33331H16.5V15.5833C16.5 16.5558 16.1137 17.4884 15.426 18.176C14.7384 18.8637 13.8058 19.25 12.8333 19.25H5.49998C4.52752 19.25 3.59489 18.8637 2.90725 18.176C2.21962 17.4884 1.83331 16.5558 1.83331 15.5833V7.33331Z" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 0.916687V3.66669" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.16669 0.916687V3.66669" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8333 0.916687V3.66669" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15:179">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":106}} className="outerDiv centerer">
          <div
            id="15:185"
            style={{"width":"1.5277777777777777%","marginLeft":"59.65277777777778%","height":"2.1484375%","top":"84.08203125%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1034 4.22586C18.6352 3.75745 18.0793 3.38587 17.4674 3.13235C16.8556 2.87884 16.1998 2.74835 15.5375 2.74835C14.8752 2.74835 14.2195 2.87884 13.6076 3.13235C12.9958 3.38587 12.4399 3.75745 11.9717 4.22586L11 5.19753L10.0284 4.22586C9.08264 3.28014 7.79997 2.74884 6.46253 2.74884C5.12508 2.74884 3.84241 3.28014 2.89669 4.22586C1.95098 5.17158 1.41968 6.45424 1.41968 7.79169C1.41968 9.12914 1.95098 10.4118 2.89669 11.3575L3.86836 12.3292L11 19.4609L18.1317 12.3292L19.1034 11.3575C19.5718 10.8893 19.9434 10.3334 20.1969 9.7216C20.4504 9.10976 20.5809 8.45397 20.5809 7.79169C20.5809 7.12941 20.4504 6.47362 20.1969 5.86178C19.9434 5.24995 19.5718 4.69405 19.1034 4.22586V4.22586Z" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":120}} className="outerDiv centerer">
          <div
            id="15:197"
            style={{"width":"1.5277777777777777%","marginLeft":"59.65277777777778%","height":"2.1484375%","top":"89.94140625%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 1.83331L2.75 5.49998V18.3333C2.75 18.8195 2.94315 19.2859 3.28697 19.6297C3.63079 19.9735 4.0971 20.1666 4.58333 20.1666H17.4167C17.9029 20.1666 18.3692 19.9735 18.713 19.6297C19.0568 19.2859 19.25 18.8195 19.25 18.3333V5.49998L16.5 1.83331H5.5Z" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.75 5.5H19.25" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6666 9.16669C14.6666 10.1391 14.2803 11.0718 13.5927 11.7594C12.9051 12.447 11.9724 12.8334 11 12.8334C10.0275 12.8334 9.09489 12.447 8.40725 11.7594C7.71962 11.0718 7.33331 10.1391 7.33331 9.16669" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":127}} className="outerDiv centerer">
          <div
            id="15:203"
            style={{"width":"1.5277777777777777%","marginLeft":"59.583333333333336%","height":"2.1484375%","top":"95.8984375%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15:203)">
<path d="M11 0.916687V21.0834" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5833 4.58331H8.70833C7.85743 4.58331 7.04138 4.92133 6.4397 5.52301C5.83802 6.12469 5.5 6.94074 5.5 7.79165C5.5 8.64255 5.83802 9.4586 6.4397 10.0603C7.04138 10.662 7.85743 11 8.70833 11H13.2917C14.1426 11 14.9586 11.338 15.5603 11.9397C16.162 12.5414 16.5 13.3574 16.5 14.2083C16.5 15.0592 16.162 15.8753 15.5603 16.4769C14.9586 17.0786 14.1426 17.4166 13.2917 17.4166H5.5" stroke="#8F8AF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15:203">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":140}} className="outerDiv centerer">
          <div
            id="15:222"
            style={{"width":"1.6666666666666667%","marginLeft":"49.02777777777778%","height":"2.34375%","top":"38.18359375%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":143}} className="outerDiv centerer">
          <div
            id="15:225"
            style={{"width":"2.1527777777777777%","marginLeft":"3.8194444444444446%","height":"3.02734375%","top":"93.06640625%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.375 3.875H24.5417C25.2268 3.875 25.8839 4.14717 26.3684 4.63164C26.8528 5.11611 27.125 5.77319 27.125 6.45833V24.5417C27.125 25.2268 26.8528 25.8839 26.3684 26.3684C25.8839 26.8528 25.2268 27.125 24.5417 27.125H19.375" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9167 21.9584L19.375 15.5L12.9167 9.04169" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.375 15.5H3.875" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":149}} className="outerDiv centerer">
          <div
            id="21:57"
            style={{"width":"1.1805555555555556%","marginLeft":"37.361111111111114%","height":"1.66015625%","top":"89.74609375%"}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49999 15.5834C12.412 15.5834 15.5833 12.412 15.5833 8.50002C15.5833 4.588 12.412 1.41669 8.49999 1.41669C4.58797 1.41669 1.41666 4.588 1.41666 8.50002C1.41666 12.412 4.58797 15.5834 8.49999 15.5834Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 11.3333V8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 5.66669H8.50708" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

