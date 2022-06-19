# frozen_string_literal: true

class NotesController < ApplicationController
  layout "notes"

  def index
    @notes_props = { title: "test title" }
  end
end
