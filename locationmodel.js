import mongoose from 'mongoose';
const locationSchema = mongoose.Schema(
  {
    lc_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      area: String,
      city: String,
      state: String,
    },
    annual_revenue: {
      type: Number,
      required: true,
    },
    ph_no: [Number],
  },
  {
    timestamps: true,
  }
);

export const Location = mongoose.model('Location', locationSchema);
