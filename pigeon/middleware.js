const { NextResponse } = require("next/server");

export default function middleware(req){
    let verify = req.cookies.get('jwtToken');
    let url = req.url

    if(!verify && (url === "http://localhost:3000/admin" || url === "http://localhost:3000/teacher" || url === "http://localhost:3000/student" || url === "http://localhost:3000/parents")){
        return NextResponse.redirect("http://localhost:3000/");
    }

    if(verify && (url === "http://localhost:3000/sign-in" || url === "http://localhost:3000/" )){
        return NextResponse.redirect("http://localhost:3000/dashboard/");
    }
}