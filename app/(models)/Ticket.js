import mongoose, { Schema } from 'mongoose';

// Connect to MongoDB using the MONGO_DB environment variable
mongoose.connect(process.env.MONGO_DB);
mongoose.Promise = global.Promise;

// Get the default connection
const db = mongoose.connection;

// Event listeners for the connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('Failed to connect to MongoDB', err);
});

db.on('disconnected', () => {
  console.warn('Disconnected from MongoDB');
});

// Define the Ticket Schema and Model
const TicketSchema = new Schema({
  title: String,
  description: String,
  status: String,
  category: String,
  priority: Number,
  progress: Number,
  active: Boolean,
}, {
  timestamps: true
});

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);

export default Ticket;
