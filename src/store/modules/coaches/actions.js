export default {
  registerCoach(context, data) {
    const coach = {
      id: 'c3',
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    context.commit('registerCoach', coach);
  },
};
