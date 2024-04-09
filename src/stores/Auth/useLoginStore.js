import {defineStore} from "pinia";
import AuthAPI from "@/services/AuthAPI.js";
import {AxiosError} from "axios";

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        form: {email: "", password: ""},
        errors: {},
        message : "",
        isLoading: false,
    }), actions: {
        updateForm(form) {
            this.form = form;
        },
        async submitForm() {
            this.isLoading = true;
            try {
                let response = await AuthAPI.login(this.form);
                if (response.request.status === 200) {
                    console.log(response.data);
                    let token = response.data.token;
                    localStorage.setItem('token', token);
                    console.log("success");
                    this.isLoading = false;
                    this.message = response.data.message;
                    return true;
                }
            } catch (e) {
                if (e instanceof AxiosError) {
                    if (e.request.status === 422) {
                        let errs = e.response.data.errors;
                        this.errors = {
                            email: errs.email[0],
                            password: errs.password[0],
                        }
                        console.log(e.response.data.errors);
                    }
                    else if(e.request.status === 500) {
                        console.log(e.message);
                        console.log(e.response.data.message);
                        this.message = e.response.data.message;
                    }
                    else{
                        console.log(e.message);
                        console.log(e.response.data.message);
                        this.message = e.response.data.message;
                    }
                } else {
                    console.log(e.message);
                }
                this.isLoading = false;
                return false;
            }
            this.isLoading = false;
        }
    }
});