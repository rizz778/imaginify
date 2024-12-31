// import Header from '@/app/components/shared/Header';
// import React from 'react';
// import { transformationTypes } from '../../../../../../constants';
// import TransformationForm from '@/app/components/shared/TransformationForm';
// import { getUserById } from '@/lib/actions/user.actions';
// import { auth } from '@clerk/nextjs/server'

// // eslint-disable-next-line no-unused-vars
// const AddTransformationTypePage = async ({ params }: SearchParamProps) => {

//   // Pass the req object into getAuth() to get user authentication details
//   const { userId, redirectToSignIn } = await auth()

//   if (!userId) return redirectToSignIn();

//   // Fetch the user data from the database
//   const user = await getUserById(userId);

//   // Get the transformation type from the constant
//   const transformation = transformationTypes[params.type];

//   return (
//     <>
//       <Header title={transformation.title} subtitle={transformation.subTitle} />

//       <TransformationForm
//         action="Add"
//         userId={user._id}
//         type={transformation.type as TransformationTypeKey}
//         creditBalance={user.creditBalance}
//       />
//     </>
//   );
// };

// export default AddTransformationTypePage;
