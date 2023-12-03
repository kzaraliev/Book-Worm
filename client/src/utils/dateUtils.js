export default function formatDate(isoDate) {
    const options = {day: "2-digit", month: "2-digit", year: "numeric" }

    return new Date(isoDate).toLocaleDateString('en-GB', options)
}