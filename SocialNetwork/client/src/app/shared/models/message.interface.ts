export interface Message {
    _id: String,
    content: String,
    sent_by: String,
    sent_to: String
    sent_on: Date,
    read: Boolean
}