let map_images = [
    { map: "mirage", source: '/picks-n-bans/picks-media/de_mirage.jpg' },
    { map: "dust2", source: '/picks-n-bans/picks-media/de_dust2.jpg' },
    { map: "inferno", source: '/picks-n-bans/picks-media/de_inferno.jpg' },
    { map: "nuke", source: '/picks-n-bans/picks-media/de_nuke.jpg' },
    { map: "anubis", source: '/picks-n-bans/picks-media/de_anubis.jpg' },
    { map: "ancient", source: '/picks-n-bans/picks-media/de_ancient.jpg' },
    { map: "train", source: '/picks-n-bans/picks-media/de_train.jpg' }
];

fetch('../../user-info/user-info.json')
    .then(response => response.json())
    .then(data => {
        let result_source = '';
        for (let i = 1; i <= 7; i++) {
            result_source = map_images.find((item) => item.map == data['ui-info']['ui-picks']['map-' + i]);            
            document.getElementById('map-' + i).src = result_source.source;
        }

        if (data['ui-info']['format'] == "bo1") {
            document.getElementById('middle-text').textContent = "ban";
            document.getElementById('middle-text').style.color = '#FFFFFF';
            document.getElementById('pick-bg').style.fill = '#D2042D';
        } else if (data['ui-info']['format'] == "bo3") {
            document.getElementById('middle-text').textContent = "pick";
            document.getElementById('middle-text').style.color = '#004F7F';
            document.getElementById('pick-bg').style.fill = '#A6CE39';
        }
    })
    .catch(error => console.error('Error loading JSON:', error));