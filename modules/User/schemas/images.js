module.exports = {
  photos: [
    {
      public: { // matriz precisa aprovar
        type: Boolean,
        default: false
      },
      name: {
        type: String
      },
      title: {
        type: String
      },
      alt: {
        type: String
      },
      keywors: [{
        type: String
      }],
      created_at: {
        type: Date,
        default: Date.now
      }
    }
  ]
}