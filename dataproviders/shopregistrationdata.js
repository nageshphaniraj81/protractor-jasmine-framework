module.exports = {
	shopregistrationdata : {
		FirstData : {
			name : "Nagesh",
			email : "nageshphaniraj@gmail.com",
			password : "test123",
			dob : "30-10-1981",
			result : "Success! The Form has been submitted successfully!."
		},
		SecondData : {
			name : "Suresh",
			email : "sureshraji@hotmail.com",
			password : "test222",
			dob : "30-10-1981",
			result : "Success! The Form has been submitted successfully!."

		},
		ThirdData : {
			name : "kiran",
			email : "kiran@yourmail.com",
			password : "test111",
			dob : "20-10-1981",
			result : "Success! The Form has been submitted successfully!."
		}
	},

	formNameValidationdata : {
		FirstData : {
			name : ".",
			result : "Name should be at least 2 characters"
		},
		SecondData : {
			name : "1",
			result : "Name should be at least 2 characters"

		},
		ThirdData : {
			name : " ",
			result : "Name should be at least 2 characters"
		},
		ThirdData : {
			name : "",
			result : "Name is required"
		}
	},

	formEmailValidationdata : {
		FirstData : {
			email : "",
			result : "Email is required"
		},

	}

}
