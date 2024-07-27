const availableDoctors = [
  {
    "doctorId": "1",
    "name": "Dr. Rajesh Kumar",
    "specialty": "Cardiology",
    "timeSlot": "9:00 AM - 10:00 AM"
  },
  {
    "doctorId": "2",
    "name": "Dr. Anjali Singh",
    "specialty": "Cardiology",
    "timeSlot": "11:00 AM - 12:00 PM"
  },
  {
    "doctorId": "3",
    "name": "Dr. Sunil Verma",
    "specialty": "Cardiology",
    "timeSlot": "2:00 PM - 3:00 PM"
  },
  {
    "doctorId": "4",
    "name": "Dr. Meena Gupta",
    "specialty": "Cardiology",
    "timeSlot": "4:00 PM - 5:00 PM"
  },
  {
    "doctorId": "5",
    "name": "Dr. Vikram Patel",
    "specialty": "Cardiology",
    "timeSlot": "9:00 PM - 10:00 PM"
  },
  {
    "doctorId": "6",
    "name": "Dr. Priya Sharma",
    "specialty": "Dermatology",
    "timeSlot": "9:00 AM - 10:00 AM"
  },
  {
    "doctorId": "7",
    "name": "Dr. Kiran Desai",
    "specialty": "Dermatology",
    "timeSlot": "11:00 AM - 12:00 PM"
  },
  {
    "doctorId": "8",
    "name": "Dr. Neha Jain",
    "specialty": "Dermatology",
    "timeSlot": "2:00 PM - 3:00 PM"
  },
  {
    "doctorId": "9",
    "name": "Dr. Aarti Rao",
    "specialty": "Dermatology",
    "timeSlot": "4:00 PM - 5:00 PM"
  },
  {
    "doctorId": "10",
    "name": "Dr. Mohan Iyer",
    "specialty": "Dermatology",
    "timeSlot": "9:00 PM - 10:00 PM"
  },
  {
    "doctorId": "11",
    "name": "Dr. Anil Mehta",
    "specialty": "Neurology",
    "timeSlot": "9:00 AM - 10:00 AM"
  },
  {
    "doctorId": "12",
    "name": "Dr. Sushma Reddy",
    "specialty": "Neurology",
    "timeSlot": "11:00 AM - 12:00 PM"
  },
  {
    "doctorId": "13",
    "name": "Dr. Rohan Nair",
    "specialty": "Neurology",
    "timeSlot": "2:00 PM - 3:00 PM"
  },
  {
    "doctorId": "14",
    "name": "Dr. Sneha Bhat",
    "specialty": "Neurology",
    "timeSlot": "4:00 PM - 5:00 PM"
  },
  {
    "doctorId": "15",
    "name": "Dr. Manoj Deshmukh",
    "specialty": "Neurology",
    "timeSlot": "9:00 PM - 10:00 PM"
  },
  {
    "doctorId": "16",
    "name": "Dr. Kavita Singh",
    "specialty": "Pediatrics",
    "timeSlot": "9:00 AM - 10:00 AM"
  },
  {
    "doctorId": "17",
    "name": "Dr. Nitin Kumar",
    "specialty": "Pediatrics",
    "timeSlot": "11:00 AM - 12:00 PM"
  },
  {
    "doctorId": "18",
    "name": "Dr. Ananya Roy",
    "specialty": "Pediatrics",
    "timeSlot": "2:00 PM - 3:00 PM"
  },
  {
    "doctorId": "19",
    "name": "Dr. Rahul Verma",
    "specialty": "Pediatrics",
    "timeSlot": "4:00 PM - 5:00 PM"
  },
  {
    "doctorId": "20",
    "name": "Dr. Smita Patil",
    "specialty": "Pediatrics",
    "timeSlot": "9:00 PM - 10:00 PM"
  },
  {
    "doctorId": "21",
    "name": "Dr. Amitabh Das",
    "specialty": "Orthopedics",
    "timeSlot": "9:00 AM - 10:00 AM"
  },
  {
    "doctorId": "22",
    "name": "Dr. Gaurav Sinha",
    "specialty": "Orthopedics",
    "timeSlot": "11:00 AM - 12:00 PM"
  },
  {
    "doctorId": "23",
    "name": "Dr. Preeti Mehta",
    "specialty": "Orthopedics",
    "timeSlot": "2:00 PM - 3:00 PM"
  },
  {
    "doctorId": "24",
    "name": "Dr. Rakesh Yadav",
    "specialty": "Orthopedics",
    "timeSlot": "4:00 PM - 5:00 PM"
  },
  {
    "doctorId": "25",
    "name": "Dr. Shalini Pandey",
    "specialty": "Orthopedics",
    "timeSlot": "9:00 PM - 10:00 PM"
  },
  {
    "doctorId": "26",
    "name": "Dr. Suman Reddy",
    "specialty": "Gastroenterology",
    "timeSlot": "9:00 AM - 10:00 AM"
  },
  {
    "doctorId": "27",
    "name": "Dr. Harish Vyas",
    "specialty": "Gastroenterology",
    "timeSlot": "11:00 AM - 12:00 PM"
  },
  {
    "doctorId": "28",
    "name": "Dr. Vikram Sharma",
    "specialty": "Gastroenterology",
    "timeSlot": "2:00 PM - 3:00 PM"
  },
  {
    "doctorId": "29",
    "name": "Dr. Ashwini Joshi",
    "specialty": "Gastroenterology",
    "timeSlot": "4:00 PM - 5:00 PM"
  },
  {
    "doctorId": "30",
    "name": "Dr. Ritu Desai",
    "specialty": "Gastroenterology",
    "timeSlot": "9:00 PM - 10:00 PM"
  },
  {
    "doctorId": "31",
    "name": "Dr. Sneha Nair",
    "specialty": "Ophthalmology",
    "timeSlot": "9:00 AM - 10:00 AM"
  },
  {
    "doctorId": "32",
    "name": "Dr. Tarun Patel",
    "specialty": "Ophthalmology",
    "timeSlot": "11:00 AM - 12:00 PM"
  },
  {
    "doctorId": "33",
    "name": "Dr. Anju Menon",
    "specialty": "Ophthalmology",
    "timeSlot": "2:00 PM - 3:00 PM"
  },
  {
    "doctorId": "34",
    "name": "Dr. Piyush Kumar",
    "specialty": "Ophthalmology",
    "timeSlot": "4:00 PM - 5:00 PM"
  },
  {
    "doctorId": "35",
    "name": "Dr. Jyoti Reddy",
    "specialty": "Ophthalmology",
    "timeSlot": "9:00 PM - 10:00 PM"
  },
  {
    "doctorId": "36",
    "name": "Dr. Arjun Patel",
    "specialty": "Gynecology",
    "timeSlot": "9:00 AM - 10:00 AM"
  },
  {
    "doctorId": "37",
    "name": "Dr. Swati Rao",
    "specialty": "Gynecology",
    "timeSlot": "11:00 AM - 12:00 PM"
  },
  {
    "doctorId": "38",
    "name": "Dr. Leena Gupta",
    "specialty": "Gynecology",
    "timeSlot": "2:00 PM - 3:00 PM"
  },
  {
    "doctorId": "39",
    "name": "Dr. Deepika Verma",
    "specialty": "Gynecology",
    "timeSlot": "4:00 PM - 5:00 PM"
  },
  {
    "doctorId": "40",
    "name": "Dr. Anuradha Sharma",
    "specialty": "Gynecology",
    "timeSlot": "9:00 PM - 10:00 PM"
  },
  {
    "doctorId": "41",
    "name": "Dr. Deepak Verma",
    "specialty": "Psychiatry",
    "timeSlot": "9:00 AM - 10:00 AM"
  },
  {
    "doctorId": "42",
    "name": "Dr. Vishal Sinha",
    "specialty": "Psychiatry",
    "timeSlot": "11:00 AM - 12:00 PM"
  },
  {
    "doctorId": "43",
    "name": "Dr. Meera Iyer",
    "specialty": "Psychiatry",
    "timeSlot": "2:00 PM - 3:00 PM"
  },
  {
    "doctorId": "44",
    "name": "Dr. Pradeep Das",
    "specialty": "Psychiatry",
    "timeSlot": "4:00 PM - 5:00 PM"
  },
  {
    "doctorId": "45",
    "name": "Dr. Ranjana Patel",
    "specialty": "Psychiatry",
    "timeSlot": "9:00 PM - 10:00 PM"
  },
  {
    "doctorId": "46",
    "name": "Dr. Neha Jain",
    "specialty": "Endocrinology",
    "timeSlot": "9:00 AM - 10:00 AM"
  },
  {
    "doctorId": "47",
    "name": "Dr. Sujata Sharma",
    "specialty": "Endocrinology",
    "timeSlot": "11:00 AM - 12:00 PM"
  },
  {
    "doctorId": "48",
    "name": "Dr. Anurag Sinha",
    "specialty": "Endocrinology",
    "timeSlot": "2:00 PM - 3:00 PM"
  },
  {
    "doctorId": "49",
    "name": "Dr. Mahesh Yadav",
    "specialty": "Endocrinology",
    "timeSlot": "4:00 PM - 5:00 PM"
  },
  {
    "doctorId": "50",
    "name": "Dr. Priya Reddy",
    "specialty": "Endocrinology",
    "timeSlot": "9:00 PM - 10:00 PM"
  },
  {
    "doctorId": "51",
    "name": "Dr. Rakesh Gupta",
    "specialty": "Rheumatology",
    "timeSlot": "9:00 AM - 10:00 AM"
  },
  {
    "doctorId": "52",
    "name": "Dr. Nidhi Singh",
    "specialty": "Rheumatology",
    "timeSlot": "11:00 AM - 12:00 PM"
  },
  {
    "doctorId": "53",
    "name": "Dr. Amit Desai",
    "specialty": "Rheumatology",
    "timeSlot": "2:00 PM - 3:00 PM"
  },
  {
    "doctorId": "54",
    "name": "Dr. Rajiv Sharma",
    "specialty": "Rheumatology",
    "timeSlot": "4:00 PM - 5:00 PM"
  },
  {
    "doctorId": "55",
    "name": "Dr. Kavita Nair",
    "specialty": "Rheumatology",
    "timeSlot": "9:00 PM - 10:00 PM"
  },
  {
    "doctorId": "56",
    "name": "Dr. Meera Joshi",
    "specialty": "Ayurveda - Panchakarma",
    "timeSlot": "9:00 AM - 10:00 AM"
  },
  {
    "doctorId": "57",
    "name": "Dr. Harish Vyas",
    "specialty": "Ayurveda - Herbal Medicine",
    "timeSlot": "11:00 AM - 12:00 PM"
  },
  {
    "doctorId": "58",
    "name": "Dr. Nandini Iyer",
    "specialty": "Ayurveda - Nutrition",
    "timeSlot": "2:00 PM - 3:00 PM"
  },
  {
    "doctorId": "59",
    "name": "Dr. Manoj Deshmukh",
    "specialty": "Ayurveda - Yoga Therapy",
    "timeSlot": "4:00 PM - 5:00 PM"
  }
]

export default availableDoctors
