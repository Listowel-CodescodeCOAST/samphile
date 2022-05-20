// import React, { useState } from "react";
// import Link from "next/link";
// import styles from "../login/Login.module.css";
// import { FcGoogle } from "react-icons/fc"

// const Login = () => {
//   return (
//     <div className={styles.login_main}>
//       <div className={styles.login_card}>
//         <h3> Welcome to Samphile</h3>
//         <form action="login" method="post">
//           <h1>Sign in</h1>
//           <div className={styles.form}>
//             <input type="email" name="email" placeholder="Email" />
//           </div>
//           <div className={styles.form}>
//             <input type="password" name="password" placeholder="Password" />
//           </div>
//           <div className={styles.submit}>
//             <button><Link href="/registrar">Sign in</Link></button>
//           </div>
//           <div className={styles.signin}>
//             <h6>Sign in with</h6>
//             <p>
//               <FcGoogle />
//             </p>
//             <p>Forgot password?</p>
//           </div>
//           <div className={styles.register}>
//             <button>
//               <Link href="/signup"> Create new account</Link>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;