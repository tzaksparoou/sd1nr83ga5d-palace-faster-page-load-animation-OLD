$(document).ready(function () {

    let imageHrefs = [];
    $(".menu a").each(function () {
        imageHrefs.push($(this).attr("id"));
    });
    const galleryList = $(".gallery");
    if (Array.isArray(imageHrefs)) {
        let galleryGroups = [];
        for (let i = 0; i < imageHrefs.length; i++) {
            const currentGroup = imageHrefs[i];
            if (galleryList.find(`[data-project=${currentGroup}]`)["length"] != 0) {
                galleryGroups.push(galleryList.find(`[data-project=${currentGroup}]`));
            }
        }
        for (let z = 0; z < galleryGroups.length; z++) {

            const currentGalleryGroup = galleryGroups[z];
            const nextGroupFI = (galleryGroups[z + 1] !== undefined && galleryGroups[z + 1][0] !== undefined) ? galleryGroups[z + 1][0] : null;
            const previousGroupLI = (galleryGroups[z - 1] !== undefined && galleryGroups[z - 1][galleryGroups[z - 1].length - 1] !== undefined) ? galleryGroups[z - 1][galleryGroups[z - 1].length - 1] : null;

            for (let k = 0; k < currentGalleryGroup.length; k++) {

                if (k == 0) {
                    $(`#${$(currentGalleryGroup[k]).data("project")}`).attr("href", `#${$(currentGalleryGroup[k]).attr("id")}`);
                }

                const currentImage = currentGalleryGroup[k];
                let nextImage = null;
                let previousImage = null;

                if (currentGalleryGroup[k + 1] !== undefined) {
                    nextImage = currentGalleryGroup[k + 1];
                } else if (nextGroupFI) {
                    nextImage = nextGroupFI;
                }
                if (currentGalleryGroup[k - 1] !== undefined) {
                    previousImage = currentGalleryGroup[k - 1];
                } else if (previousGroupLI) {
                    previousImage = previousGroupLI;
                }

                if (previousImage) {
                    $(currentImage).append(
                        `<a href="#${$(previousImage).attr("id")}" class="prev"></a>`
                    )
                }

                if (nextImage) {
                    $(currentImage).append(
                        `<a href="#${$(nextImage).attr("id")}" class="next"></a>`
                    )
                }
            }
        }
    }

})