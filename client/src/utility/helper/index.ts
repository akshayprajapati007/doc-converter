import { WORD_TYPE } from "utility/constants"

export const fileTypeChecker = (fileName: string, checkingType: string) => {
    const fileExtension = fileName.split('.').pop()
    switch (checkingType) {
        case "doc":
            if (fileExtension) return WORD_TYPE.includes(fileExtension)
            return false
    }
}