// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import { Lock } from 'lucide-react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { signIn } = useAuth();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       await signIn(email, password);
//       navigate('/admin/dashboard');
//     } catch (err) {
//       setError('Failed to sign in. Please check your credentials.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center px-4">
//       <div className="max-w-md w-full">
//         <div className="bg-white rounded-xl shadow-md p-8">
//           <div className="flex justify-center mb-6">
//             <div className="bg-primary-light rounded-full p-3">
//               <Lock className="h-6 w-6 text-primary" />
//             </div>
//           </div>
          
//           <h1 className="text-2xl font-serif font-bold text-accent text-center mb-6">
//             Admin Login
//           </h1>

//           {error && (
//             <div className="bg-red-50 text-red-800 p-3 rounded-lg mb-4 text-sm">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="input-field"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-text mb-1">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="input-field"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="btn btn-primary w-full"
//               >
//                 {loading ? 'Signing in...' : 'Sign In'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;