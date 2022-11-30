import { useState } from "react";

import "./Home.css"

const Home = () => {
    const [cash, setCash] = useState("")
    const [market, setMarket] = useState("")
    const [accRec, setAccRec] = useState("")
    const [inv, setInv] = useState("")
    const [vendNTR, setVendNTR] = useState("")
    const [otherCA, setOtherCA] = useState("")

    const [marketNCA, setMarketNCA] = useState("")
    const [property, setProperty] = useState("")
    const [otherNCA, setOtherNCA] = useState("")

    const [accPay, setAccPay] = useState("")
    const [otherCL, setOtherCL] = useState("")
    const [dr, setDr] = useState("")
    const [cp, setCp] = useState("")
    const [td, setTd] = useState("")

    const [tdNCL, setTdNCL] = useState("")
    const [otherNCL, setOtherNCL] = useState("")

    const [cs, setCs] = useState("")
    const [re, setRe] = useState("")
    const [ace, setAce] = useState("")
    return (
        <div>
            <div className="title">
                Balance Sheet Generator
            </div>
            <div id="page" className="wrapper" >
                <div className="title">
                    Balance Sheet
                </div>
                <div className="form">
                    <div className="centerDiv">
                        <div className="inputField">
                            <label className="label">Company</label>
                            <input type="text" className="input width100" id="Company" />
                        </div>
                        <div className="inputField">
                            <label className="label">Year</label>
                            <input type="date" className="input width100" id="date" />
                        </div>
                    </div>
                    <div className="wrapper flex noBorder" >
                        <div className="wrapper">
                            <div className="form" >
                                <div className="title fontRed">
                                    Current Assets
                                </div>
                                <div className="inputField">
                                    <label className="label">Cash</label>
                                    <input type="text" className="input" id="cash" onChange={(e) => setCash(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Marketable Security</label>
                                    <input type="text" className="input" id="market_security" onChange={(e) => setMarket(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Accounts receivable</label>
                                    <input type="text" className="input" id="accounts_receivable" onChange={(e) => setAccRec(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Inventory</label>
                                    <input type="text" className="input" id="Inventory" onChange={(e) => setInv(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Vendor Non-Trade Receivables</label>
                                    <input type="text" className="input" id="vendor_non_trade" onChange={(e) => setVendNTR(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Other Current Assets</label>
                                    <input type="text" className="input" id="other_current_assets" onChange={(e) => setOtherCA(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField center">
                                    <label className="label">Total Current Assets</label>
                                    <input type="text" className="input" id="total_current_assets" value={cash + market + accRec + inv + vendNTR + otherCA} />
                                </div>

                                <div className="title fontRed">
                                    Non Current Assets
                                </div>

                                <div className="inputField">
                                    <label className="label">Marketable Securities</label>
                                    <input type="text" className="input" id="marketable_securities_nca" onChange={(e) => setMarketNCA(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Property, plant and equipment, net</label>
                                    <input type="text" className="input" id="property" onChange={(e) => setProperty(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Other Non Current Assets</label>
                                    <input type="text" className="input" id="other_non_current_assets" onChange={(e) => setOtherNCA(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Total Fixed Assets</label>
                                    <input type="text" className="input" id="total_fixed_assets" value={marketNCA + property + otherNCA} />
                                </div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="form">
                                <div className="title fontRed">
                                    Current Liabilities
                                </div>
                                <div className="inputField">
                                    <label className="label">Accounts payable</label>
                                    <input type="text" className="input" id="accounts_payable" onChange={(e) => setAccPay(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Other Current Liabilities</label>
                                    <input type="text" className="input" id="other_current_liabilities" onChange={(e) => setOtherCL(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Deferred Revenue</label>
                                    <input type="text" className="input" id="deferred_revenue" onChange={(e) => setDr(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Commercial Paper</label>
                                    <input type="text" className="input" id="commercial_paper" onChange={(e) => setCp(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Term Debt</label>
                                    <input type="text" className="input" id="term_debt" onChange={(e) => setTd(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Total current Liabilities</label>
                                    <input type="text" className="input" id="total_current_liabilities" value={accPay + otherCL + dr + cp + td} />
                                </div>
                                <div className="title fontRed">
                                    Non-current Liabilities
                                </div>
                                <div className="inputField">
                                    <label className="label">Term Debt</label>
                                    <input type="text" className="input" id="tdNCL" onChange={(e) => setTdNCL(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Other Non Current liabilities</label>
                                    <input type="text" className="input" id="other_non_current_liabilities" onChange={(e) => setOtherNCL(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Total Non Current Liabilities</label>
                                    <input type="text" className="input" id="total_non_current_liabilities" value={tdNCL + otherNCL} />
                                </div>

                                <div className="title fontRed">
                                    Shareholder's Equity
                                </div>
                                <div className="inputField">
                                    <label className="label">Common stock and additional paid-in capital $0.00001 par value: 50,400,000 shares authorized; 16,976,763 and 17,772,945 shares issued and outstanding, respectively</label>
                                    <input type="text" className="input" id="common_stock" onChange={(e) => setCs(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Retained Earnings</label>
                                    <input type="text" className="input" id="retained_earnings" onChange={(e) => setRe(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Accummulated and other Comprehensive Income</label>
                                    <input type="text" className="input" id="acc-income" onChange={(e) => setAce(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Total Shareholder's Equity</label>
                                    <input type="text" className="input" id="total_shareholder_Equity" value={(cs + re) - ace} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="inputField">
                            <label className="label">Total Assets</label>
                            <input type="text" className="input" id="total_fixed_assets" value={cash + market + accRec + inv + vendNTR + otherCA + marketNCA + property + otherNCA} />
                        </div>
                        <div className="inputField center">
                            <label className="label">Total Liabilities and Equity</label>
                            <input type="text" className="input" id="total_fixed_assets" value={accPay + otherCL + dr + cp + td + tdNCL + otherNCL + (cs + re) - ace} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home