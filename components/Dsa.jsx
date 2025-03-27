import "../src/Dsa.css"
import gfg from "../src/assets/gfg.png"
import leetcode from "../src/assets/leetcode.png"
import codeforces from "../src/assets/codeforces.png"
import python from "../src/assets/python.png"
import cplang from "../src/assets/cplang.png"
import clang from "../src/assets/clang.png"
// import github from "../src/assets/github.png"
function Dsa(){
    return <div className="code">
        <h2>Coding Profiles & Stack</h2>
        <div className="dsa">
    <div className="code-profile">
        <h3>GFG Profile</h3>
        <a href="https://www.geeksforgeeks.org/user/aryan0fzbe/"><img src={gfg} alt="" /></a>
    </div>
    <div className="code-profile">
        <h3>Leetcode Profile</h3>
        <a href="https://leetcode.com/u/Aryan_0312g/"><img src={leetcode} alt="" /></a>
    </div>
    <div className="code-profile">
        <h3>Codeforces Profile</h3>
        <a href="https://leetcode.com/u/Aryan_0312g/"><img src={codeforces} alt="" id="codeforces" /></a>
    </div>
    <div className="code-lang">
        <h3>C++</h3>
        <img src={cplang} alt="" />
    </div>
    <div className="code-lang">
        <h3>C</h3>
        <img src={clang} alt="" />
    </div>
    <div className="code-lang">
        <h3>Python</h3>
        <img src={python} alt="" />
    </div>
  </div>
    </div>
}

export default Dsa;