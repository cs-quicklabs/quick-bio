import { db } from "~/database/connection.server";
import { SpotlightFormType } from "~/types/spotlightForm.server";

export async function addUpdateSpotlight(spotlightForm: SpotlightFormType, user: any){
    let {
        buttonAction,
        buttonActionlink,
        buttonColor, 
        buttonText,
        buttonhex,
        spotlightIcon, 
        toggleSpotlight 
    } = spotlightForm

    toggleSpotlight = Boolean(toggleSpotlight)

    await db.spotlightButton.upsert({
        where: {
            userId: user.id
        },
        create: {
            buttonAction,
            buttonActionlink,
            buttonColor, 
            buttonText, 
            spotlightIcon, 
            buttonhex,
            toggleSpotlight : toggleSpotlight as boolean,
            userId: user.id
        },
        update: {
            buttonAction: buttonAction ?? user.spotlightButton.buttonAction,
            buttonActionlink: buttonActionlink ?? user.spotlightButton.buttonActionlink,
            buttonColor: buttonColor ?? user.spotlightButton.buttonColor, 
            buttonhex: buttonhex ?? user.spotlightButton.buttonHex,
            buttonText: buttonText ?? user.spotlightButton.buttonText, 
            spotlightIcon: spotlightIcon ?? user.spotlightButton.spotlightIcon, 
            toggleSpotlight : toggleSpotlight as boolean ?? user.spotlightButton.toggleSpotlight,
        }
    })
}

export async function deleteSpotlightButton(user: any){
    await db.spotlightButton.delete({
        where:{
            userId: user.id
        }
    })
    return true
}