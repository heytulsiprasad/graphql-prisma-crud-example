const Mutation = {
	async changeTodo(parent, args, ctx, info) {
		const todo = await ctx.db.mutation.updateTodo(
			{
				data: {
					title: args.title,
					description: args.description,
				},
				where: {
					id: args.id,
				},
			},
			info
		);

		return todo;
	},

	async makeTodo(parent, args, ctx, info) {
		const todo = await ctx.db.mutation.createTodo(
			{
				data: { ...args },
			},
			info
		);

		return todo;
	},

	async removeTodo(parent, args, ctx, info) {
		const todo = await ctx.db.mutation.deleteTodo(
			{
				where: { id: args.id },
			},
			info
		);

		return todo;
	},
};

module.exports = Mutation;
