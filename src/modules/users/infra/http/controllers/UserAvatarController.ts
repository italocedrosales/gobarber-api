import { Response, Request } from 'express';
import { container } from 'tsyringe';

import UpdateAvatarUserService from '@modules/users/services/UpdateAvatarUserService';

class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateAvatarUserService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return response.status(201).json(userWithoutPassword);
  }
}

export default UserAvatarController;
