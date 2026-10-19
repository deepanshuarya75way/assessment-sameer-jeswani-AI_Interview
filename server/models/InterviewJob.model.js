// import mongoose from "mongoose";

// const interviewJobSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId, 
//       ref: "User",
//       required: true
//     },
//     idempotencyKey: {
//       type:String,
//       required: true
//     },
//     status: {
//       type: String,
//       enum: ["queued", "running", "completed", "failed"],
//       default: "queued"
//     },
//     input: {
//       type: mongoose.Schema.Types.Mixed,
//       required: true
//     },
//     result: {
//       type: mongoose.Schema.Types.Mixed,
//       default: null
//     },
//     errorMessage: {
//       type: String,
//       default: null
//     },
//     attempts:{
//       type: Number, 
//       default:0
//     },
//     nextRetryAt:{
//       type: Date, 
//       default: null
//     }
//   },
//   {timestamps: true}
// );

// interviewJobSchema.index(
//   {userId: 1, idempotencyKey:1},
//   {unique:true}
// );

// const InterviewJob = mongoose.model(
//   "InterviewJob", interviewJobSchema
// );

// export default InterviewJob;