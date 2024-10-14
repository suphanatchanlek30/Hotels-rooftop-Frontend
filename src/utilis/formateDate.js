export const formatDate = (isoDate) => {
    const data =  new Date(isoDate);
    return data.toLocaleDateString('en-Us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}