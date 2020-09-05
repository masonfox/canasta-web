/*
 * These are the fundemental default cards. They are imported into the store.
 */
const cards = {
    1: { id: 1, name: 'Joker', abbreviation: 'Jo', value: 50, valid: { canasta: false, loose: true, remaining: true } },
    2: { id: 2, name: '2', abbreviation: '2', value: 20, valid: { canasta: false, loose: true, remaining: true } },
    3: { id: 3, name: 'Ace', abbreviation: 'A', value: 20, valid: { canasta: true, loose: true, remaining: true } },
    4: { id: 4, name: 'King', abbreviation: 'K', value: 10, valid: { canasta: true, loose: true, remaining: true }  },
    5: { id: 5, name: 'Queen', abbreviation: 'Q', value: 10, valid: { canasta: true, loose: true, remaining: true }  },
    6: { id: 6, name: 'Jack', abbreviation: 'Ja', value: 10, valid: { canasta: true, loose: true, remaining: true }  },
    7: { id: 7, name: '10', abbreviation: '10', value: 10, valid: { canasta: true, loose: true, remaining: true }  },
    8: { id: 8, name: '9', abbreviation: '9', value: 10, valid: { canasta: true, loose: true, remaining: true }  },
    9: { id: 9, name: '8', abbreviation: '8', value: 10, valid: { canasta: true, loose: true, remaining: true }  },
    10: { id: 10, name: '7', abbreviation: '7', value: 5, valid: { canasta: true, loose: true, remaining: true }  },
    11: { id: 11, name: '6', abbreviation: '6', value: 5, valid: { canasta: true, loose: true, remaining: true }  },
    12: { id: 12, name: '5', abbreviation: '5', value: 5, valid: { canasta: true, loose: true, remaining: true }  },
    13: { id: 13, name: '4', abbreviation: '4', value: 5, valid: { canasta: true, loose: true, remaining: true }  },
    14: { id: 14, name: 'Red 3', abbreviation: 'R 3', value: -500, valid: { canasta: false, loose: false, remaining: true }  },
    15: { id: 15, name: 'Black 3', abbreviation: 'B 3', value: 0, valid: { canasta: false, loose: false, remaining: true }  },
}

export default cards