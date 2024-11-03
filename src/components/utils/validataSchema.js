import * as Yup from "yup";


const phonePattern = /^\d{3}-\d{2}-\d{2}$/
	
const schemaValidate = Yup.object({
	name: Yup.string()
		.min(2, "Name має містити більше двох символів")
		.max(15, "Name має містити менше 15 символів")
		.required("поле Name не може бути пустим"),
	number: Yup.string()
		.required("поле Number не може бути пустим")
		.matches(phonePattern, "Неправильний номер.Введіть номер у форматі 000-00-00"),
});

export default schemaValidate;