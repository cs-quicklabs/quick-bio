import { db } from "~/database/connection.server";
import { addHoursToDate, differenceInHours } from "~/utils/date.server";
import bcrypt from 'bcryptjs'

export async function createUserVerificationToken(userId: string, token: string) {
    const hashedToken = await bcrypt.hash(token, 10)
    await db.userVerification.create({
        data: {
            userId,
            uniqueString: hashedToken,
            expiresAt: await addHoursToDate(new Date(Date.now()), 6)
        }
    })
}

export async function deleteUserVerificationToken(userId: string) {
    await db.userVerification.delete({
        where: {
            userId
        }
    })
}

export async function checkTokenValidation(userId: string, token: string) {
    const userVerification = await db.userVerification.findFirst({
        where: {
            userId,
        }
    })
    const isSameToken = await bcrypt.compare(token, userVerification?.uniqueString as string)
    if(isSameToken){            
        if (userVerification && (await differenceInHours(new Date(Date.now()), userVerification?.expiresAt) <= 6)){
            return true
        }
    }
    return false
}