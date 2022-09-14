const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_SPOTIFY_CLIENT_ID,
    BUILDABLE_SPOTIFY_CLIENT_SECRET,
    BUILDABLE_SPOTIFY_BASE_URI,
    seed_artists,
    seed_genres,
    seed_tracks,
    limit,
    market,
    min_acousticness,
    max_acousticness,
    target_acousticness,
    min_danceability,
    max_danceability,
    target_danceability,
    min_duration_ms,
    max_duration_ms,
    target_duration_ms,
    min_energy,
    max_energy,
    target_energy,
    min_instrumentalness,
    max_instrumentalness,
    target_instrumentalness,
    min_key,
    max_key,
    target_key,
    min_liveness,
    max_liveness,
    target_liveness,
    min_loudness,
    max_loudness,
    target_loudness,
    min_mode,
    max_mode,
    target_mode,
    min_popularity,
    max_popularity,
    target_popularity,
    min_speechiness,
    max_speechiness,
    target_speechiness,
    min_tempo,
    max_tempo,
    target_tempo,
    min_time_signature,
    max_time_signature,
    target_time_signature,
    min_valence,
    max_valence,
    target_valence,
  } = input;

  verifyInput(input);

  try {
    const {
      data: { access_token },
    } = await axios({
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: BUILDABLE_SPOTIFY_CLIENT_ID,
        password: BUILDABLE_SPOTIFY_CLIENT_SECRET,
      },
      data: qs.stringify({ grant_type: "client_credentials" }),
    });

    const { data } = await axios({
      method: "get",
      url: `${BUILDABLE_SPOTIFY_BASE_URI}/recommendations`,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params: {
        seed_artists,
        seed_genres,
        seed_tracks,
        ...(limit ? { limit } : {}),
        ...(market ? { market } : {}),
        ...(min_acousticness ? { min_acousticness } : {}),
        ...(max_acousticness ? { max_acousticness } : {}),
        ...(target_acousticness ? { target_acousticness } : {}),
        ...(min_danceability ? { min_danceability } : {}),
        ...(max_danceability ? { max_danceability } : {}),
        ...(target_danceability ? { target_danceability } : {}),
        ...(min_duration_ms ? { min_duration_ms } : {}),
        ...(max_duration_ms ? { max_duration_ms } : {}),
        ...(target_duration_ms ? { target_duration_ms } : {}),
        ...(min_energy ? { min_energy } : {}),
        ...(max_energy ? { max_energy } : {}),
        ...(target_energy ? { target_energy } : {}),
        ...(min_instrumentalness ? { min_instrumentalness } : {}),
        ...(max_instrumentalness ? { max_instrumentalness } : {}),
        ...(target_instrumentalness ? { target_instrumentalness } : {}),
        ...(min_key ? { min_key } : {}),
        ...(max_key ? { max_key } : {}),
        ...(target_key ? { target_key } : {}),
        ...(min_liveness ? { min_liveness } : {}),
        ...(max_liveness ? { max_liveness } : {}),
        ...(target_liveness ? { target_liveness } : {}),
        ...(min_loudness ? { min_loudness } : {}),
        ...(max_loudness ? { max_loudness } : {}),
        ...(target_loudness ? { target_loudness } : {}),
        ...(min_mode ? { min_mode } : {}),
        ...(max_mode ? { max_mode } : {}),
        ...(target_mode ? { target_mode } : {}),
        ...(min_popularity ? { min_popularity } : {}),
        ...(max_popularity ? { max_popularity } : {}),
        ...(target_popularity ? { target_popularity } : {}),
        ...(min_speechiness ? { min_speechiness } : {}),
        ...(max_speechiness ? { max_speechiness } : {}),
        ...(target_speechiness ? { target_speechiness } : {}),
        ...(min_tempo ? { min_tempo } : {}),
        ...(max_tempo ? { max_tempo } : {}),
        ...(target_tempo ? { target_tempo } : {}),
        ...(min_time_signature ? { min_time_signature } : {}),
        ...(max_time_signature ? { max_time_signature } : {}),
        ...(target_time_signature ? { target_time_signature } : {}),
        ...(min_valence ? { min_valence } : {}),
        ...(max_valence ? { max_valence } : {}),
        ...(target_valence ? { target_valence } : {}),
      },
    });

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error.message,
      data: error.response.data,
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({
  BUILDABLE_SPOTIFY_CLIENT_ID,
  BUILDABLE_SPOTIFY_CLIENT_SECRET,
  BUILDABLE_SPOTIFY_BASE_URI,
  seed_artists,
  seed_genres,
  seed_tracks,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_SPOTIFY_CLIENT_ID:
      "A valid BUILDABLE_SPOTIFY_CLIENT_ID field (string) was not provided in the input.",
    INVALID_BUILDABLE_SPOTIFY_CLIENT_SECRET:
      "A valid BUILDABLE_SPOTIFY_CLIENT_SECRET field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_SPOTIFY_BASE_URI:
      "A valid BUILDABLE_SPOTIFY_BASE_URI field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_SEED_ARTISTS: "A valid seed_artists field (string) was not provided in the input.",
    INVALID_SEED_GENRES: "A valid seed_genres field (string) was not provided in the input.",
    INVALID_SEED_TRACKS: "A valid seed_tracks field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_SPOTIFY_CLIENT_ID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_SPOTIFY_CLIENT_ID);
  if (typeof BUILDABLE_SPOTIFY_CLIENT_SECRET !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_SPOTIFY_CLIENT_SECRET);
  if (typeof BUILDABLE_SPOTIFY_BASE_URI !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_SPOTIFY_BASE_URI);
  if (typeof seed_artists !== "string") throw new Error(ERRORS.INVALID_SEED_ARTISTS);
  if (typeof seed_genres !== "string") throw new Error(ERRORS.INVALID_SEED_GENRES);
  if (typeof seed_tracks !== "string") throw new Error(ERRORS.INVALID_SEED_TRACKS);
};
