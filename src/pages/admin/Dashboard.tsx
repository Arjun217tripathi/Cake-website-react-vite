// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import { LogOut, Package, Users, ShoppingBag, Settings } from 'lucide-react';

// const Dashboard = () => {
//   const { user, signOut } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate('/admin/login');
//     }
//   }, [user, navigate]);

//   const handleSignOut = async () => {
//     try {
//       await signOut();
//       navigate('/admin/login');
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   const stats = [
//     { label: 'Total Orders', value: '156', icon: Package },
//     { label: 'Active Customers', value: '2,394', icon: Users },
//     { label: 'Products', value: '48', icon: ShoppingBag },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Top Navigation */}
//       <nav className="bg-white shadow-sm">
//         <div className="container-custom py-4">
//           <div className="flex justify-between items-center">
//             <h1 className="font-serif text-2xl font-bold text-accent">
//               Admin Dashboard
//             </h1>
//             <button
//               onClick={handleSignOut}
//               className="flex items-center text-text hover:text-primary transition-colors"
//             >
//               <LogOut className="h-5 w-5 mr-2" />
//               Sign Out
//             </button>
//           </div>
//         </div>
//       </nav>

//       <div className="container-custom py-8">
//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="bg-white rounded-xl shadow-md p-6">
//               <div className="flex items-center">
//                 <div className="bg-primary-light rounded-full p-3 mr-4">
//                   <stat.icon className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-text/70">{stat.label}</p>
//                   <p className="text-2xl font-bold text-accent">{stat.value}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//           <h2 className="font-serif text-xl font-bold text-accent mb-4">
//             Quick Actions
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {[
//               { label: 'Add New Product', icon: ShoppingBag },
//               { label: 'View Orders', icon: Package },
//               { label: 'Customer List', icon: Users },
//               { label: 'Settings', icon: Settings },
//             ].map((action, index) => (
//               <button
//                 key={index}
//                 className="flex items-center justify-center p-4 bg-background rounded-lg hover:bg-primary-light/50 transition-colors"
//               >
//                 <action.icon className="h-5 w-5 mr-2 text-primary" />
//                 <span>{action.label}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Recent Orders Table */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h2 className="font-serif text-xl font-bold text-accent mb-4">
//             Recent Orders
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b">
//                   <th className="text-left py-3 px-4">Order ID</th>
//                   <th className="text-left py-3 px-4">Customer</th>
//                   <th className="text-left py-3 px-4">Product</th>
//                   <th className="text-left py-3 px-4">Status</th>
//                   <th className="text-left py-3 px-4">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   {
//                     id: '#ORD-001',
//                     customer: 'John Doe',
//                     product: 'Birthday Cake',
//                     status: 'Delivered',
//                     total: '$59.99',
//                   },
//                   {
//                     id: '#ORD-002',
//                     customer: 'Jane Smith',
//                     product: 'Wedding Cake',
//                     status: 'Processing',
//                     total: '$299.99',
//                   },
//                   {
//                     id: '#ORD-003',
//                     customer: 'Mike Johnson',
//                     product: 'Cupcakes (12)',
//                     status: 'Pending',
//                     total: '$32.99',
//                   },
//                 ].map((order, index) => (
//                   <tr key={index} className="border-b last:border-0">
//                     <td className="py-3 px-4">{order.id}</td>
//                     <td className="py-3 px-4">{order.customer}</td>
//                     <td className="py-3 px-4">{order.product}</td>
//                     <td className="py-3 px-4">
//                       <span className={`inline-block px-2 py-1 rounded-full text-xs ${
//                         order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
//                         order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
//                         'bg-yellow-100 text-yellow-800'
//                       }`}>
//                         {order.status}
//                       </span>
//                     </td>
//                     <td className="py-3 px-4">{order.total}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;