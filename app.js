SC.initialize({
    client_id: 'YOUR_CLIENT_ID' // Replace with your SoundCloud API client ID
  });
  
  // Fetch and display music tracks
  SC.get('/tracks', { limit: 10 }, function(tracks) {
    var musicContainer = document.getElementById('music-container');
  
    tracks.forEach(function(track) {
      var trackContainer = document.createElement('div');
      trackContainer.className = 'track-container';
  
      var trackPlayer = document.createElement('iframe');
      trackPlayer.src = 'https://w.soundcloud.com/player/?url=' + track.permalink_url;
      trackPlayer.width = '100%';
      trackPlayer.height = '166';
      trackPlayer.allow = 'autoplay';
      trackPlayer.setAttribute('allowfullscreen', true);
  
      trackContainer.appendChild(trackPlayer);
      musicContainer.appendChild(trackContainer);
    });
  });