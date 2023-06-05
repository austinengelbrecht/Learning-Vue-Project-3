export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
      coachId: payload.coachId,
    };

    const response = await fetch(
      `https://test-back-end.com/coaches/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed');
      throw error;
    }

    newRequest.id = responseData.name;

    context.commit('addRequest', newRequest);
  },
};
