import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { createUserSession, getUser } from "~/services/auth.service.server";
import { verifyEmail } from "~/services/mail.service";
import { deleteUserVerificationToken } from "~/services/userVerification.service";

export const loader: LoaderFunction = async ({request, params}) => {
    const user = await getUser(request)
    const verified = await verifyEmail(params.token as string, user?.id as string)
    if(verified){
            // redirect user from here to login page with success message 

            // delete userverificationentry
            await deleteUserVerificationToken(user?.id as string)
    }
    return createUserSession(user?.id as string, '/')
}