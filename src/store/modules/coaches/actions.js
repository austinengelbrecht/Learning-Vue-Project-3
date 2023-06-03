export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coach = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://test-back-end.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coach),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error...
    }

    context.commit('registerCoach', { ...coach, id: userId });
  },
};
