const alphaSort = savedMovies => {
    let sorted = savedMovies.sort((a, b) => {
        let titleA = a.Title.toUpperCase();
        let titleB = b.Title.toUpperCase();
        return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
    })
    return sorted;
}

const reverseAlphaSort = savedMovies => {
    let sorted = savedMovies.sort((a, b) => {
        let titleA = a.Title.toUpperCase();
        let titleB = b.Title.toUpperCase();
        return (titleA > titleB) ? -1 : (titleA < titleB) ? 1 : 0;
    })
    return sorted;
}

const oldestSort = savedMovies => {
    let sorted = savedMovies.sort((a ,b) => {
        return a.Year - b.Year ||  a.Title.localeCompare(b.Title);
    })
    return sorted;
}

const newestSort = savedMovies => {
    let sorted = savedMovies.sort((a ,b) => {
        return b.Year - a.Year ||  a.Title.localeCompare(b.Title);
    })
    return sorted;
}

export const movieSorter = (savedMovies, sortParam) => {
    if(sortParam === "alpha") {
        return alphaSort(savedMovies);
    } else if(sortParam === "reverse-alpha") {
        return reverseAlphaSort(savedMovies);
    } else if(sortParam === "oldest") {
        return oldestSort(savedMovies);
    } else if(sortParam === "newest") {
        return newestSort(savedMovies);
    } 
}